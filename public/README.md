# Pain Management Summary SMART on FHIR Application

## About

The Pain Management Summary SMART on FHIR application was developed to support the pilot of the CDS artifact, [Factors to Consider in Managing Chronic Pain: A Pain Management Summary](https://cds.ahrq.gov/cdsconnect/artifact/factors-consider-managing-chronic-pain-pain-management-summary).  This artifact presents a variety of key "factors" for clinicians to consider when assessing the history of a patient's chronic pain.  These factors include subjective and objective findings, along with recorded treatments and interventions to inform shared decision making on treatments moving forward.

The Pain Management Summary SMART on FHIR application was piloted during Summer 2018.  Local modifications and development were needed to fully support this application in the pilot environment.  For example, custom development was needed to expose pain assessments via the FHIR API. See the pilot reports for more information.

This application was originally piloted with support for FHIR DSTU2.  The app has been updated since the pilot to also support FHIR R4, although pilot R4 support has not been piloted in a clinical setting.

This prototype application is part of the [CDS Connect](https://cds.ahrq.gov/cdsconnect) project, sponsored by the [Agency for Healthcare Research and Quality](https://www.ahrq.gov/) (AHRQ), and developed under contract with AHRQ by [MITRE's CAMH](https://www.mitre.org/centers/cms-alliances-to-modernize-healthcare/who-we-are) FFRDC.

## Contributions

For information about contributing to this project, please see [CONTRIBUTING](CONTRIBUTING.md).

## Development Details

The Pain Management Summary is a web-based application implemented with the popular [React](https://reactjs.org/) JavaScript framework. The application adheres to the [SMART on FHIR](https://smarthealthit.org/) standard, allowing it to be integrated into EHR products that support the SMART on FHIR platform. To ensure the best adherence to the standard, the Pain Management Summary application uses the open source [FHIR client](https://github.com/smart-on-fhir/client-js) library provided by the SMART Health IT group.

The logic used to determine what data to display in the Pain Management Summary is defined using [CQL](http://cql.hl7.org/) and integrated into the application as the corresponding JSON ELM representation of the CQL.  The application analyzes the JSON ELM representation to determine what data is needed and then makes the corresponding queries to the FHIR server.

Once the necessary FHIR data has been retrieved from the EHR, the open source [CQL execution engine](https://github.com/cqframework/cql-execution) library is invoked with it and the JSON ELM to calculate the structured summary of the data to display to the user.  This structured summary is then used by the React components to render a user-friendly view of the information.

### Limitations

This CDS logic queries for several concepts that do not yet have standardized codes.  To support this, the following local codes have been defined:

| Code | System | Display |
| --- | --- | --- |
| PEGASSESSMENT | http://cds.ahrq.gov/cdsconnect/pms | Pain Enjoyment General Activity (PEG) Assessment |
| PEGPAIN | http://cds.ahrq.gov/cdsconnect/pms | Pain |
| PEGENJOYMENT | http://cds.ahrq.gov/cdsconnect/pms | Enjoyment of life |
| PEGGENERALACTIVITY | http://cds.ahrq.gov/cdsconnect/pms | General activity |
| STARTBACK | http://cds.ahrq.gov/cdsconnect/pms | STarT Back Screening Tool |
| SQETOHUSE | http://cds.ahrq.gov/cdsconnect/pms | Single question r/t ETOH use |
| SQDRUGUSE | http://cds.ahrq.gov/cdsconnect/pms | Single question r/t drug use |
| MME | http://cds.ahrq.gov/cdsconnect/pms | Morphine Milligram Equivalent (MME) |

Systems integrating the Pain Management Summary will need to expose the corresponding data as observations using the codes above.  As standardized codes become available, these local codes will be replaced.

## To change the client ID

On some systems, you must register a client ID to be used during client authorization.  This
distribution defaults to `6c12dff4-24e7-4475-a742-b08972c4ea27`, but it can be easily changed
by editing the client ID in the `launch-context.json` file:

```json
{
  "clientId": "6c12dff4-24e7-4475-a742-b08972c4ea27",
  "scope": "patient/*.read",
  "completeInTarget": true
}
```

_NOTE: The launch context contains `"completeInTarget": true`. This is needed if you are running in an environment that initializes the app in a separate window (such as the public SMART sandbox).  It can be safely removed in other cases._

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