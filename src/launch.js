import 'fhirclient';

fetch(`${process.env.PUBLIC_URL}/launch-context.json`)
  .then((response)      => response.json())
  .then((launchContext) => window.FHIR.oauth2.authorize(launchContext))
  .catch((error)        => console.error(error));
