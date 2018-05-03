import 'fhirclient';

window.FHIR.oauth2.authorize({
  "client_id": process.env.REACT_APP_SMART_CLIENT_ID,
  "scope":  "patient/*.read"
});
