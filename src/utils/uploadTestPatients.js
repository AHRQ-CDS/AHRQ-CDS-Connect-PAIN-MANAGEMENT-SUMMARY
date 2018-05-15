const fs = require('fs');
const path = require('path');
const mkFhir = require('fhir.js');
const baseUrl = 'http://launch.smarthealthit.org/v/r2/fhir';

function convertToTx(bundle) {
  const tx = JSON.parse(JSON.stringify(bundle)); // clone it
  tx.type = 'transaction';
  for (const entry of tx.entry) {
    entry.fullUrl = `${baseUrl}/${entry.resource.resourceType}/${entry.resource.id}`;
    entry.request = {
      method: 'PUT',
      url: `${entry.resource.resourceType}/${entry.resource.id}`
    }
  }
  return tx;
}

function stringResult(response) {
  const name = response.config.bundle.id;
  const status = response.status;
  const statusMap = {};
  if (response.data && response.data.entry && response.data.entry) {
    response.data.entry.forEach(entry => {
      const entryStatus = entry.response && entry.response.status ? entry.response.status : 'unknown';
      if (!statusMap[entryStatus]) {
        statusMap[entryStatus] = 1;
      } else {
        statusMap[entryStatus] = statusMap[entryStatus] + 1;
      }
    });
  }
  return name.padEnd(25) + '     ' + `${status}`.padEnd(9) + '     ' + JSON.stringify(statusMap);
}

const client = mkFhir({ baseUrl });

console.log('-'.padEnd(80, '-'));
console.log('bundle id                     tx status     entry statuses')
console.log('-'.padEnd(80, '-'));

const testPatientsPath = path.join(__dirname, 'test_patients');
for (const fileName of fs.readdirSync(testPatientsPath)) {
  const file = path.join(testPatientsPath, fileName);
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
  const patientJSON = JSON.parse(JSON.stringify(json));
  patientJSON.id += '_patient';
  patientJSON.entry = patientJSON.entry.filter(e => e.resource && e.resource.resourceType === 'Patient');
  const entriesJSON = JSON.parse(JSON.stringify(json));
  entriesJSON.id += '_entries';
  entriesJSON.entry = entriesJSON.entry.filter(e => e.resource && e.resource.resourceType !== 'Patient');

  client.transaction({ bundle: convertToTx(patientJSON) }).then(
    (success) => {
      console.log(stringResult(success));
      client.transaction({ bundle: convertToTx(entriesJSON) }).then(
        (success) => {
          console.log(stringResult(success));
        },
        (error) => {
          console.error(stringResult(error));
        }
      );
    },
    (error) => {
      console.error(stringResult(error));
    }
  );
}


