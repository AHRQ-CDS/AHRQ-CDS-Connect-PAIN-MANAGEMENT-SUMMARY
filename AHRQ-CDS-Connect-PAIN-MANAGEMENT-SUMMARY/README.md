# Factors to Consider in Managing Chronic Pain

This is the SMART-on-FHIR app for the CDS artifact: "Factors to Consider in Managing Chronic Pain".
This app uses FHIR to retrieve patient data, executes CQL CDS logic against it, and displays the
results.

## To change the client ID

On some systems, you must register a client ID to be used during client authorization.  This
distribution defaults to `6c12dff4-24e7-4475-a742-b08972c4ea27`, but it can be easily changed
by editing the client ID in the `launch-context.json` file:

```json
{
  "client_id": "6c12dff4-24e7-4475-a742-b08972c4ea27",
  "scope": "patient/*.read"
}
```

## To configure analytics reporting

This app can post JSON-formatted analytic data to an endpoint each time the application is invoked.

The data that is posted reports whether or not the patient met the CDS inclusion criteria, lists
each section and subsection of the summary (along with the number of entries in each subsection),
and provides an overall count of entries.  The basic form of the data is as follows:

```
{
  "meetsInclusionCriteria": <boolean>,
  "sections": [
    {
      "section": <stringName>,
      "subSections": [
        { "subSection": <stringName>, "numEntries": <intCount> },
        ...
      ]
    },
    ...
  ],
  "totalNumEntries": <intCount>
}
```

To enable posting of analytics, configure the `analytics_endpoint` and `x_api_key` in the `config.json` file.
The default value is an empty string, which will not post any analytics.

## To run the CQL SMART-on-FHIR app:

This application consistes of HTML, CSS, and JavaScript.  It can be run from any standard HTML
server such as Apache httpd or nginx.

## To run against the public SMART sandbox

These instructions assume you are running the web server on port 8000 on your local host.
If this is not the case, change the URL in these instructions to match your environment.

1. Browse to http://launch.smarthealthit.org/
2. In the _App Launch URL_ box at the bottom of the page, enter: `http://localhost:8000/launch.html`
3. Click _Launch App!_
4. Select a patient

You should see the app come up with the patient's name, age, and gender at the top of the page.
Below that are sections of information containing data that might be helpful when making decisions
about managing pain.

## To run against the Epic SMART sandbox

These instructions assume you are running the web server on port 8000 on your local host.
If this is not the case, change the URL in these instructions to match your environment.

1. Browse to https://open.epic.com/Launchpad/Oauth2Sso
2. Select a patient from the dropdown
3. In the _YOUR APP'S LAUNCH URL_ box, enter: `http://localhost:8000/launch.html`
4. In the _YOUR APP'S OAUTH2 REDIRECT URL_ box, enter: `http://localhost:8000/index.html`
5. Click _Launch App_

You should see the app come up with the patient's name, age, and gender at the top of the page.
Below that are sections of information containing data that might be helpful when making decisions
about managing pain.