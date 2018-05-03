import React, { Component } from 'react';

export default class Launch extends Component {
  componentWillMount() {
    window.FHIR.oauth2.authorize({
      "client_id": process.env.REACT_APP_SMART_CLIENT_ID,
      "scope":  "patient/*.read"
    });
  }

  render() {
    return <div>Loading...</div>;
  }
}
