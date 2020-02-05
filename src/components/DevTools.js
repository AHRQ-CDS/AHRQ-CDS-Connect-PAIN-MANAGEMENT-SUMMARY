import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FhirQuery from './FhirQuery';

export default class DevTools extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      displayDevTools: false,
      displayFhirQueries: false,
      displayCQLResults: false
    };
  }

  toggleDevTools = (event) => {
    event.preventDefault();
    this.setState({ displayDevTools: !this.state.displayDevTools });
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
    return (
      <tr key={i}>
        <td>{er.type}</td>
        <td>{er.error.message || er.error.statusText || 'No error message provided'}</td>
      </tr>
    );
  }

  renderErrors() {
    const errResponses = this.props.collector.filter(i => i.error);

    if (errResponses.length) {
      return (
        <div className="cql-errors">
          <h4>{errResponses.length} Errors</h4>

          <table id="cql-errors" border="1" width="100%">
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
        <h4>FHIR Queries <button onClick={this.toggleFhirQueries}>[show/hide]</button></h4>
        <div style={{ display: this.state.displayFhirQueries ? 'block' : 'none' }}>
          {this.props.collector.map((item, i) => {
            const url = i === 0 ? item.url : item.url.slice(item.url.lastIndexOf('/') + 1);
            return (
              <FhirQuery key={i} url={url} data={item.data} />
            );
          })}
        </div>
      </div>
    );
  }

  renderCQLResults() {
    return (
      <div className="cql-results">
        <h4>CQL Results <button onClick={this.toggleCQLResults}>[show/hide]</button></h4>

        <div style={{ display: this.state.displayCQLResults ? 'block' : 'none' }}>
          <pre>{JSON.stringify(this.props.result, null, 2)}</pre>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.collector) { return null; }

    return (
      <div className="dev-tools">
        <h4>Development Tools <button onClick={this.toggleDevTools}>[show/hide]</button></h4>

        <div className="dev-tools__disclaimer">
          These development tools are for troubleshooting issues and intended to be used by technical support.
        </div>

        <div style={{ display: this.state.displayDevTools ? 'block' : 'none' }}>
          {this.renderErrors()}
          {this.renderFHIRQueries()}
          {this.renderCQLResults()}
        </div>
      </div>
    );
  }
}

DevTools.propTypes = {
  collector: PropTypes.array.isRequired,
  result: PropTypes.object.isRequired
};
