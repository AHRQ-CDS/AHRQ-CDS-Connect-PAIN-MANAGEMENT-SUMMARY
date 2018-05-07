import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    if (!query) { return null; }

    return (
      <div className="fhir-query">
        <b>{url}</b> <button href="#" onClick={this.toggleShowHide}>[show/hide]</button>
        <pre style={{display: this.state.displayed ? 'block' : 'none'}}>{JSON.stringify(query.data, null, 2)}</pre>
      </div>
    );
  }
}

FhirQuery.propTypes = {
  query: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};
