import 'fhirclient';

fetch('../../launch-context.json')
  .then((response)      => response.json())
  .then((launchContext) => window.FHIR.oauth2.authorize(launchContext))
  .catch((error)        => console.error(error));
