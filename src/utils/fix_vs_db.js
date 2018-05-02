const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'cql', 'valueset-db.json');
const original = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const fixed = {};
for (const oid of Object.keys(original)) {
  fixed[oid] = {};
  for (const version of Object.keys(original[oid])) {
    if (Array.isArray(original[oid][version])) {
      console.log('Already in correct format!');
      process.exit(0);
    }
    fixed[oid][version] = original[oid][version]['codes'];
  }
}
fs.writeFileSync(`${filePath}.original`, JSON.stringify(original, null, 2), 'utf8');
fs.writeFileSync(`${filePath}`, JSON.stringify(fixed, null, 2), 'utf8');
