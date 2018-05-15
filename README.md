# Factors to Consider in Managing Chronic Pain

## To build and run this SMART-on-FHIR app:

1. Install [Node.js](https://nodejs.org/en/download/) (LTS edition, currently 8.x)
2. Install [Yarn](https://yarnpkg.com/en/docs/install) (1.3.x or above)
3. Install dependencies by executing `yarn` from the project's root directory
4. If you have a SMART-on-FHIR client ID, do one of the following (your choice):
   a. Define / export a `SMART_CLIENT_ID` environment variable in your environment
   b. Or create a `.env` file in this folder with the contents: `SMART_CLIENT_ID=your-id-here`
5. "Webpack" the code by executing `yarn build` from the project's root directory
6. Serve the code by executing `yarn start` (runs on port 8000)

## To run against the public SMART sandbox

1. Browse to http://launch.smarthealthit.org/
2. In the _App Launch URL_ box at the bottom of the page, enter: `http://localhost:8000/launch.html`
3. Click _Launch App!_
4. Select a patient

### To upload test patients to the public SMART sandbox

Testing this SMART App is more meaningful when we can supply test patients that exercise various aspects of the application.  Test patients are represented as FHIR bundles at `src/utils/test_patients`.  To upload the test patients to the public SMART sandbox:

1. Run `yarn upload-test-patients`

This adds a number of patients, mostly with the last name "Jackson" (for example, "Fuller Jackson" has entries in every section of the app).  The SMART sandbox is reset every night, so you will need to do this at least once each day you want to test.

## To run in standalone mode on the public SMART sandbox

The SMART launcher has a bug that doesn't allow IE 11 to enter the launch URL.  This makes testing in IE 11 very difficult.  To overcome this, you can reconfigure the app as a standalone app.  To do so, follow these steps:

1. Overwrite the `/public/launch-context.json` file with these contents:
   ```json
   {
     "client": {
       "client_id": "6c12dff4-24e7-4475-a742-b08972c4ea27",
       "scope":  "patient/*.read launch/patient"
     },
     "server": "url-goes-here"
   }
   ```
1. Browse to http://launch.smarthealthit.org/
2. In _Launch Type_, choose **Provider Standalone Launch**
3. Copy the FHIR URL in the _FHIR Server URL_ box (e.g., `http://launch.smarthealthit.org/v/r2/sim/eyJoIjoiMSIsImkiOiIxIiwiaiI6IjEifQ/fhir`)
4. Paste it into `/public/launch-context.json` file where `url-goes-here` is
5. Browse to http://localhost:8000/launch.html

_NOTE: Do *not* check in the modified launch-context.json! We may want to consider making a dev feature to better support this mode._

## To run against the Epic SMART sandbox

1. Browse to https://open.epic.com/Launchpad/Oauth2Sso
2. Select a patient from the dropdown
3. In the _YOUR APP'S LAUNCH URL_ box, enter: `http://localhost:8000/launch.html`
4. In the _YOUR APP'S OAUTH2 REDIRECT URL_ box, enter: `http://localhost:8000/`
5. Click _Launch App_

## To run against a local instance of the SMART Platform

First install the SMART Platform via: https://github.com/smart-on-fhir/installer

Verify it works via the sample apps included with it:
1. Browse to http://localhost:9080/
2. Sign in using demo/demo
3. Pick "SMART DSTU2 Sandbox"
4. Click "Growth Chart" app
5. Click "Launch"
6. Click "Clark, Susan A."

Then register the app via the SMART Platform:

1. Browse to http://localhost:9080/ (if not already signed in)
2. Sign in using demo/demo (if not already signed in)
3. Pick "SMART DSTU2 Sandbox" (if not already signed in)
4. Choose "Register Manually"
5. Enter these values:
   a. App Type: Public Client
   b. App Name: CQL Demo
   c. App Launch URI: http://localhost:8000/launch.html
   d. App Redirect URIs: http://localhost:8000/
   e. Allow Offline Access: NO
   f. Patient Scoped App: YES
6. Save
7. Click the "CQL Demo" app
8. Click "Launch"
9. Choose a patient

## To create more test patients

The `upload-test-patients` task uploads test patients using a FHIR DSTU2 transaction bundle.  Test bundles can be created/updated by hand, but that can be tedious and error-prone.  There is also a slightly *less* tedious and *less* error-prone approach through the use of the *cds_artifact_collaboration* test framework, which allows for creating tests patients via a YAML format.

### First Create the FHIR JSON test data bundle(s)

1. Clone the `cds_artifact_collaboration` repo via
   ```
   $ git clone git@gitlab.mitre.org:cds-connect/cds_artifact_collaboration.git
   ```
2. Switch to the `pmf` branch
   ```
   $ git checkout pmf
   ```
3. Note the set of test YAML patients already defined at: `test/PainManagementFactors/FHIRv102/fixtures`.
   - These define the data that should go in the record for a test patient as well as a subset of expected results (usually the `Summary`).
   - Perhaps the test patient you want is already represented?  If so, great!
   - If your needs aren't already represented via an existing test patient, this is where you add one.
4. The test framework converts the test data to FHIR JSON, but keeps it only in memory by default.  To dump it to disk, edit the file `test/loadYamlTestCases/index.js` so the `DUMP_PATIENTS` constant is `true` (to do, support modifing this via environment variable).
5. To generate and dump the patients, you need to run the tests.  You don't want to run all the tests in the repo (there are 1000s), so just do this:
   ```
   npx mocha test/PainManagementFactors/FHIRv102/
   ```
6. Confirm you now have test patients in FHIR JSON format at `test_dump`.
7. Add new test patients as necessary and re-run step 5 above.
   - If you do not need to verify CQL results (you just want the test data JSON), you can remove the `results:` section of the YAML.  But ideally we should be verifying results.

### Then move desired bundles to pain-management-factors app

1. Copy the JSON files you want to upload from the `cds_artifact_collaboration` repo's `test_dump` folder to `src/utils/test_patients` folder.  You probably want to rename the file and the bundle `id` in the file.  Many of our test patients also use the same name, gender, and birthdate -- so consider editing that as well.
2. Run `yarn upload-test-patients` to upload the new patient(s) to the SMART server.