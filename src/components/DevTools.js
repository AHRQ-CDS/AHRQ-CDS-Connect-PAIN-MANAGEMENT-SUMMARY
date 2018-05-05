import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FhirQuery from './FhirQuery';

export default class DevTools extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      displayFhirQueries: false,
      displayCQLResults: false
    };
  }

  toggleFhirQueries = (event) => {
    event.preventDefault();
    this.setState({ displayFhirQueries: !this.state.displayFhirQueries });
  }

  toggleCQLResults = (event) => {
    event.preventDefault();
    this.setState({ displayCQLResults: !this.state.displayCQLResults });
  }

  errorMessage(er, i) {
    let msg = 'See query info below for details';
    if (er.error.responseJSON) {
      msg = er.error.responseJSON.ExceptionMessage || er.error.responseJSON.Message;
    } else if (er.error.statusText) {
      msg = er.error.statusText;
    }

    return (
      <tr key={i}>
        <td>{er.config.type}</td>
        <td>{msg}</td>
      </tr>
    );
  }

  renderErrors() {
    const errResponses = this.props.collector.filter(i => i.error);

    if (errResponses.length) {
      return (
        <div className="errors">
          <h4>{errResponses.length} Errors</h4>

          <table id="errors" border="1" width="100%">
            <thead>
              <tr>
                <th>Resource</th>
                <th>Error</th>
              </tr>
            </thead>

            <tbody>
              {errResponses.map((er, i) => this.errorMessage(er, i))}
            </tbody>
          </table>
        </div>
      );
    }

    return <div></div>;
  }

  renderFHIRQueries() {
    return (
      <div className="fhir-queries">
        <h4>FHIR Queries <button onClick={this.toggleFhirQueries}>show/hide</button></h4>
        <div style={{ display: this.state.displayFhirQueries ? 'block' : 'none' }}>
          {this.props.collector.map((item, i) => {
            const url = i === 0 ? item.config.url : item.config.url.slice(item.config.url.lastIndexOf('/') + 1);
            return (
              <FhirQuery url={url} query={item} key={i} />
            );
          })}
        </div>
      </div>
    );
  }

  renderCQLResults() {
    return (
      <div className="cql-results">
        <h4>CQL Results <button onClick={this.toggleCQLResults}>show/hide</button></h4>

        <div style={{ display: this.state.displayCQLResults ? 'block' : 'none' }}>
          <pre>{JSON.stringify(this.props.result, null, 2)}</pre>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="dev-tools">
        {this.renderErrors()}
        {this.renderFHIRQueries()}
        {this.renderCQLResults()}
      </div>
    );
  }
}

DevTools.propTypes = {
  collector: PropTypes.array.isRequired,
  result: PropTypes.object.isRequired
};
