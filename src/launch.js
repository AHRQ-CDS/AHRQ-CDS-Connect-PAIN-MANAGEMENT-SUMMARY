import 'fhirclient'; // sets window.FHIR

// Defaults to Epic sandbox client id
window.FHIR.oauth2.authorize({
  "client_id": process.env.SMART_CLIENT_ID || window.DEFAULT_SMART_CLIENT_ID,
  "scope":  "patient/*.read"
});