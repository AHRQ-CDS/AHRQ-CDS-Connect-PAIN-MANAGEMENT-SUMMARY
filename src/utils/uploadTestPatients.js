const fs = require('fs');
const path = require('path');
const axios = require('axios');
const mkdirp = require('mkdirp');

const DUMP_TEST_PATIENT_JSON = true;

// DSTU2
upload('DSTU2', 'https://r2.smarthealthit.org', path.join(__dirname, 'dstu2_test_patients'))
.then(() => {
  // R4
  console.log();
  upload('R4', 'https://r4.smarthealthit.org', path.join(__dirname, 'r4_test_patients'));
});

function convertToTx(bundle, baseURL) {
  const tx = JSON.parse(JSON.stringify(bundle)); // clone it
  tx.type = 'transaction';
  for (const entry of tx.entry) {
    entry.fullUrl = `${baseURL}/${entry.resource.resourceType}/${entry.resource.id}`;
    entry.request = {
      method: 'PUT',
      url: `${entry.resource.resourceType}/${entry.resource.id}`
    }
  }
  return tx;
}

function stringResult(name, responseOrError) {
  let response = responseOrError;
  if (responseOrError.status == null && responseOrError.response != null && responseOrError.response.status != null) {
    response = responseOrError.response;
  }

  const status = `${response.status} ${response.statusText}`;
  const statusMap = {};
  if (response.data && response.data.entry) {
    response.data.entry.forEach(entry => {
      const entryStatus = entry.response && entry.response.status ? entry.response.status : 'unknown';
      if (!statusMap[entryStatus]) {
        statusMap[entryStatus] = 1;
      } else {
        statusMap[entryStatus] = statusMap[entryStatus] + 1;
      }
    });
  } else {
    statusMap[status] = 1;
  }
  return name.padEnd(25) + '     ' + `${status}`.padEnd(9) + '     ' + JSON.stringify(statusMap);
}

function upload(release, baseURL, patientPath) {
  console.log('-'.padEnd(80, '-'));
  console.log('url:', baseURL);
  console.log('bundle id                     tx status     entry statuses')
  console.log('-'.padEnd(80, '-'));

  const requests = [];
  for (const fileName of fs.readdirSync(patientPath)) {
    const file = path.join(patientPath, fileName);
    if (!file.endsWith('.json')) {
      console.log('Skipping non-JSON file:', file);
      continue;
    }

    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (json.resourceType !== 'Bundle') {
      console.error('Test patients must be a valid FHIR Bundle.  Not a Bundle:', file);
      continue;
    }

    // Due to an issue w/ how the server handles transactions when a patient has been deleted, we post the patient
    // first and then the other stuff.
    const patientJSON = json.entry.find(e => e.resource && e.resource.resourceType === 'Patient').resource;
    const entriesJSON = JSON.parse(JSON.stringify(json));
    entriesJSON.id += '_entries';
    entriesJSON.entry = entriesJSON.entry.filter(e => e.resource && e.resource.resourceType !== 'Patient');

    if (DUMP_TEST_PATIENT_JSON) {
      const dumpFolder = path.join(__dirname, '..', '..', 'test_patient_dump', release);
      mkdirp.sync(dumpFolder);

      const patientFile = path.join(dumpFolder, fileName.replace('.json', '_patient.json'));
      fs.writeFileSync(patientFile, JSON.stringify(patientJSON, null, 2), 'utf8');

      const txEntries = convertToTx(entriesJSON, baseURL);
      const txEntriesFile = path.join(dumpFolder, fileName.replace('.json', '_entries.json'));
      fs.writeFileSync(txEntriesFile, JSON.stringify(txEntries, null, 2), 'utf8');
    }

    const ptOptions = {
      method: 'put',
      url: `${baseURL}/Patient/${patientJSON.id}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: patientJSON
    }
    const request = axios(ptOptions)
      .then((response) => {
        console.log(stringResult(`${json.id}_patient`, response));
        const entOptions = {
          method: 'post',
          url: baseURL,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: convertToTx(entriesJSON, baseURL)
        }
        return axios(entOptions)
          .then((response) => {
            console.log(stringResult(entriesJSON.id, response));
          })
          .catch((error) => {
            console.error(stringResult(entriesJSON.id, error));
          });
      })
      .catch((error) => {
        console.error(stringResult(patientJSON.id, error));
      });

    requests.push(request);
  }
  return Promise.all(requests);
}

