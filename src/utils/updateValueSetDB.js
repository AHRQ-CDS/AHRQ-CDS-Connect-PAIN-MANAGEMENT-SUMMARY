// This script updates the valueset-db.json file with any changes from the CQL
// library and/or changes in the value set definitions in VSAC.  It should be
// called with the UMLS Username and Password as arguments.
const fs = require('fs');
const path = require('path');
const temp = require('temp');
const { Library, Repository } = require('cql-execution');
const { CodeService } = require('cql-exec-vsac');
const dstu2FactorsELM = require('../cql/dstu2/Factors_to_Consider_in_Managing_Chronic_Pain.json');
const dstu2CommonsELM = require('../cql/dstu2/CDS_Connect_Commons_for_FHIRv102.json');
const dstu2HelpersELM = require('../cql/dstu2/FHIRHelpers.json');
const dstu3FactorsELM  = require('../cql/dstu3/Factors_to_Consider_in_Managing_Chronic_Pain_FHIRv300.json');
const dstu3CommonsELM = require('../cql/dstu3/CDS_Connect_Commons_for_FHIRv300.json');
const dstu3HelpersELM = require('../cql/dstu3/FHIRHelpers.json');
const r4FactorsELM = require('../cql/r4/Factors_to_Consider_in_Managing_Chronic_Pain_FHIRv400.json');
const r4CommonsELM = require('../cql/r4/CDS_Connect_Commons_for_FHIRv400.json');
const r4HelpersELM = require('../cql/r4/FHIRHelpers.json');

// First ensure a username and password are provided
const [user, password] = process.argv.slice(2);
if (user == null || password == null) {
  console.error('The UMLS username and password must be passed in as arguments');
  process.exit(1);
}

// Then initialize the cql-exec-vsac CodeService, pointing to a temporary
// folder to dump the valueset cache files.
temp.track(); // track temporary files and delete them when the process exits
const tempFolder = temp.mkdirSync('vsac-cache');
const codeService = new CodeService(tempFolder);

console.log(`Using temp folder: ${tempFolder}`);

// Then setup the CQL libraries that we need to analyze to extract the
// valuesets from.  In theory, the DSTU2 and R4 libraries should use the
// same valuesets, but in case they don't we go ahead and load both of
// them.
const dstu2Lib = new Library(dstu2FactorsELM, new Repository({
  CDS_Connect_Commons_for_FHIRv102: dstu2CommonsELM,
  FHIRHelpers: dstu2HelpersELM
}));
const dstu3Lib = new Library(dstu3FactorsELM, new Repository({
    CDS_Connect_Commons_for_FHIRv300: dstu3CommonsELM,
    FHIRHelpers: dstu3HelpersELM
}));
const r4Lib = new Library(r4FactorsELM, new Repository({
  CDS_Connect_Commons_for_FHIRv400: r4CommonsELM,
  FHIRHelpers: r4HelpersELM
}));

// Then use the ensureValueSetsInLibrary function to analyze the Pain
// Management Summary CQL, request all the value sets from VSAC, and store
// their data in the temporary folder.  The second argument (true)
// indicates to also look at dependency libraries.  This has no affect
// for the current CQL, but may be helpful for people who extend it.
console.log(`Loading value sets from VSAC using account: ${user}`);
codeService.ensureValueSetsInLibrary(dstu2Lib, true, user, password)
  .then(() => codeService.ensureValueSetsInLibrary(dstu3Lib, true, user, password))
  .then(() => codeService.ensureValueSetsInLibrary(r4Lib, true, user, password))
  .then(() => {
    // The valueset-db.json that the codeService produces isn't exactly the
    // format that the Pain Management Summary wants, so now we must reformat
    // it into the desired format.
    const tempDBFile = path.join(tempFolder, 'valueset-db.json');
    const original = JSON.parse(fs.readFileSync(tempDBFile, 'utf8'));
    let oidKeys = Object.keys(original).sort();
    console.log(`Loaded ${oidKeys.length} value sets`);
    console.log('Translating JSON to expected format')
    const fixed = {};
    for (const oid of oidKeys) {
      fixed[oid] = {};
      for (const version of Object.keys(original[oid])) {
        fixed[oid][version] = original[oid][version]['codes'].sort((a, b) => {
          if (a.code < b.code) return -1;
          else if (a.code > b.code) return 1;
          return 0;
        });
      }
    }

    // And finally write the result to the real locations of the valueset-db.json.
    const dbPath = path.join(__dirname, '..', 'cql', 'valueset-db.json');
    fs.writeFileSync(dbPath, JSON.stringify(fixed, null, 2), 'utf8');
    console.log('Updated:', dbPath);
  })
  .catch((error) => {
    let message = error.message;
    if (error.statusCode === 401) {
      // The default 401 message isn't helpful at all
      message = 'invalid password or unauthorized access'
    }
    console.error('Error updating valueset-db.json:', message);
    process.exit(1);
  });


