# SMART-on-FHIR CQL Demo

This is a sample SMART-on-FHIR app that uses CQL to define queries and do some minimal processing
on the results.  Its primary purpose is to prove support for CQL processing in SMART-on-FHIR
and serve as a test application in SMART-on-FHIR environments.

## To change the client ID

On some systems, you must register a client ID to be used during client authorization.  This
distribution defaults to `6c12dff4-24e7-4475-a742-b08972c4ea27`, but it can be easily changed
by editing the client ID in the launch.html file:

```html
<script type="text/javascript">
  window.DEFAULT_SMART_CLIENT_ID = '6c12dff4-24e7-4475-a742-b08972c4ea27';
</script>
```

## To run the CQL SMART-on-FHIR app:

This is a simple HTML and JavaScript application.  It can be run from any standard HTML server
such as Apache httpd, nginx, or even Python's SimpleHTTPServer.

For example, on Macs, you can use the built-in python distribution.  Run the following command
from the folder that contains the HTML and JavaScript files (the same folder this README is in):

```bash
$ python -m SimpleHTTPServer 8000
```

## To run against the public SMART sandbox

These instructions assume you are running the web server on port 8000 on your local host.
If this is not the case, change the URL in these instructions to match your environment.

1. Browse to http://launch.smarthealthit.org/
2. In the _App Launch URL_ box at the bottom of the page, enter: `http://localhost:8000/launch.html`
3. Click _Launch App!_
4. Select a patient

You should see the patient's name, age, and gender at the top of the app page.  Below that are tables for Conditions, Encounters, Medications, Observations, Procedures, and some debug information.

## To run against the Epic SMART sandbox

These instructions assume you are running the web server on port 8000 on your local host.
If this is not the case, change the URL in these instructions to match your environment.

1. Browse to https://open.epic.com/Launchpad/Oauth2Sso
2. Select a patient from the dropdown
3. In the _YOUR APP'S LAUNCH URL_ box, enter: `http://localhost:8000/launch.html`
4. In the _YOUR APP'S OAUTH2 REDIRECT URL_ box, enter: `http://localhost:8000/index.html`
5. Click _Launch App_

You should see the patient's name, age, and gender at the top of the app page.  Below that are tables for Conditions, Encounters, Medications, Observations, Procedures, and some debug information.

## To run against a local instance of the SMART Platform

These instructions assume you are running the web server on port 8000 on your local host.
If this is not the case, change the URL in these instructions to match your environment.

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

You should see the patient's name, age, and gender at the top of the app page.  Below that are tables for Conditions, Encounters, Medications, Observations, Procedures, and some debug information.