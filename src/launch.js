import 'react-app-polyfill/stable';
import FHIR from 'fhirclient';

fetch(`${import.meta.env.BASE_URL}launch-context.json`)
  .then((response)      => response.json())
  .then((launchContext) => FHIR.oauth2.authorize(launchContext))
  .catch((error)        => console.error(error));
