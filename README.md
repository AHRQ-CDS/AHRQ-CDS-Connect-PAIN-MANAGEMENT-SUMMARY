# SMART-on-FHIR CQL Demo

## To build and run the CQL SMART-on-FHIR app:

1. Install [Node.js](https://nodejs.org/en/download/) (LTS edition, currently 8.x)
2. Install [Yarn](https://yarnpkg.com/en/docs/install) (1.3.x or above)
3. Install dependencies by executing `yarn` from the project's root directory
4. If you have a SMART-on-FHIR client ID, do one of the following (your choice):
   a. Define / export a `SMART_CLIENT_ID` environment variable in your environment
   b. Or create a `.env` file in this folder with the contents: `SMART_CLIENT_ID=your-id-here`
5. "Webpack" the code by executing `yarn build` from the project's root directory
6. Run a web server from the dist folder (recommend: `python -m SimpleHTTPServer 8000`)

## To run against the public SMART sandbox

1. Browse to http://launch.smarthealthit.org/
2. In the _App Launch URL_ box at the bottom of the page, enter: `http://localhost:8000/launch.html`
3. Click _Launch App!_
4. Select a patient

## To run against the Epic SMART sandbox

1. Browse to https://open.epic.com/Launchpad/Oauth2Sso
2. Select a patient from the dropdown
3. In the _YOUR APP'S LAUNCH URL_ box, enter: `http://localhost:8000/launch.html`
4. In the _YOUR APP'S OAUTH2 REDIRECT URL_ box, enter: `http://localhost:8000/index.html`
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
   d. App Redirect URIs: http://localhost:8000/index.html
   e. Allow Offline Access: NO
   f. Patient Scoped App: YES
6. Save
7. Click the "CQL Demo" app
8. Click "Launch"
9. Choose a patient

You should see the patient's name, age, and gender at the top of the app page.  Below that are tables for Conditions, Medication Orders, Observations, and Debug info.