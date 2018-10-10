const fs = require('fs');
const path = require('path');
const rpn = require('request-promise-native');
const mkdirp = require('mkdirp');

const BASE_URL = 'http://launch.smarthealthit.org/v/r2/fhir/';
const DUMP_TRANSACTION_BUNDLES = true;

function convertToTx(bundle) {
  const tx = JSON.parse(JSON.stringify(bundle)); // clone it
  tx.type = 'transaction';
  for (const entry of tx.entry) {
    entry.fullUrl = `${BASE_URL}/${entry.resource.resourceType}/${entry.resource.id}`;
    entry.request = {
      method: 'PUT',
      url: `${entry.resource.resourceType}/${entry.resource.id}`
    }
  }
  return tx;
}

function stringResult(name, response) {
  const status = `${response.statusCode} ${response.statusMessage}`;
  const statusMap = {};
  if (response.body && response.body.entry) {
    response.body.entry.forEach(entry => {
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

  if (DUMP_TRANSACTION_BUNDLES) {
    const dumpFolder = path.join(__dirname, '..', '..', 'tx_bundle_dump');
    mkdirp.sync(dumpFolder);

    const txPatient = convertToTx(patientJSON);
    const txPatientFile = path.join(dumpFolder, fileName.replace('.json', '_patient_tx.json'));
    fs.writeFileSync(txPatientFile, JSON.stringify(txPatient, null, 2), 'utf8');

    const txEntries = convertToTx(entriesJSON);
    const txEntriesFile = path.join(dumpFolder, fileName.replace('.json', '_entries_tx.json'));
    fs.writeFileSync(txEntriesFile, JSON.stringify(txEntries, null, 2), 'utf8');
  }

  const ptOptions = {
    method: 'POST',
    uri: BASE_URL,
    body: convertToTx(patientJSON),
    resolveWithFullResponse: true,
    json: true
  }
  rpn(ptOptions).then(
    (success) => {
      console.log(stringResult(patientJSON.id, success));
      const entOptions = {
        method: 'POST',
        uri: BASE_URL,
        body: convertToTx(entriesJSON),
        resolveWithFullResponse: true,
        json: true
      }
      rpn(entOptions).then(
        (success) => {
          console.log(stringResult(entriesJSON.id, success));
        },
        (error) => {
          console.error(stringResult(entriesJSON.id, error));
        }
      );
    },
    (error) => {
      console.error(stringResult(patientJSON.id, error));
    }
  );
}

