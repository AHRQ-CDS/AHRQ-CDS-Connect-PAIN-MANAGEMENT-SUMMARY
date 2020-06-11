import FHIR from 'fhirclient';

let params = new URLSearchParams(document.location.search.substring(1));
let encodedLaunch = params.get('launch');
let decodedLaunch = atob(encodedLaunch);
let launchContextIn = JSON.parse(decodedLaunch);

fetch(`${process.env.PUBLIC_URL}/launch-context.json`)
  .then((response)      => response.json())
  .then((launchContext) => {
      launchContext.patientId = launchContextIn.b;
      return FHIR.oauth2.authorize(launchContext);
  })
  .catch((error)        => console.error(error));
