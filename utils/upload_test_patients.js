const mkFhir = require('fhir.js');
const fullerJackson = require('./test_patients/fuller_jackson.json')
const baseUrl = 'http://launch.smarthealthit.org/v/r2/fhir'

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

const tx = convertToTx(fullerJackson);

const client = mkFhir({ baseUrl });

client.transaction({ bundle: tx }).then(
  (entry) => {
    console.log('SUCCESS', JSON.stringify(entry, null, 2));
  },
  (error) => {
    console.error('ERROR', JSON.stringify(error, null, 2));
  }
)
