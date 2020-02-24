import FHIR from 'fhirclient';

// retrieve launch context from backend, if configured
let context_url = `${process.env.PUBLIC_URL}/launch-context.json`;
if (process.env.REACT_APP_CONF_API_URL){
  context_url = `${process.env.REACT_APP_CONF_API_URL}/auth/auth-info`;
}

fetch(context_url, {
  // include cookies in request
  credentials: 'include'
})
  .then((response)      => response.json())
  .then((launchContext) => FHIR.oauth2.authorize(launchContext))
  .catch((error)        => console.error(error));
