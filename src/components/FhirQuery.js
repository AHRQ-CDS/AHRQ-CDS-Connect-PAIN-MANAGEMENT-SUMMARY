import React, { Component } from 'react';

export default class FhirQuery extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      displayed: false
    };
  }

  toggleShowHide = (event) => {
    event.preventDefault();
    this.setState({ displayed: !this.state.displayed });
  }

  render() {
    const { query, url } = this.props;

    return (
      <div className="fhir-query">
        <b>{url} (<a href="#" onClick={this.toggleShowHide}>show/hide</a>)</b>
        <pre style={{display: this.state.displayed ? 'block' : 'none'}}>{JSON.stringify(query.data, null, 2)}</pre>
      </div>
    );
  }
}