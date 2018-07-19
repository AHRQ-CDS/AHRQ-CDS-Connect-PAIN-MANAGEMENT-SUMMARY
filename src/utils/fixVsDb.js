const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'cql', 'valueset-db.json');
const original = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// First fix the format
const fixed = {};
for (const oid of Object.keys(original)) {
  fixed[oid] = {};
  for (const version of Object.keys(original[oid])) {
    if (Array.isArray(original[oid][version])) {
      // Already in correct format!
      fixed[oid][version] = original[oid][version]
    } else {
      fixed[oid][version] = original[oid][version]['codes'];
    }
  }
}

// Then sort it
const sorted = {};
const oidKeys = Object.keys(fixed).sort();
for (const oid of oidKeys) {
  sorted[oid] = {};
  const versionKeys = Object.keys(fixed[oid]);
  for (const version of versionKeys) {
    sorted[oid][version] = fixed[oid][version].sort((a, b) => {
      if (a.code < b.code) return -1;
      else if (a.code > b.code) return 1;
      return 0;
    });
  }
}

fs.writeFileSync(`${filePath}.original`, JSON.stringify(original, null, 2), 'utf8');
fs.writeFileSync(`${filePath}`, JSON.stringify(sorted, null, 2), 'utf8');
