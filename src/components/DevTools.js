import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FhirQuery from './FhirQuery';

function DevTools({ collector, result }) {
  const [displayDevTools, setDisplayDevTools] = useState(false);
  const [displayFhirQueries, setDisplayFhirQueries] = useState(false);
  const [displayCQLResults, setDisplayCQLResults] = useState(false);

  function toggleDevTools(event) {
    event.preventDefault();
    setDisplayDevTools(!displayDevTools);
  }

  function toggleFhirQueries(event) {
    event.preventDefault();
    setDisplayFhirQueries(!displayFhirQueries);
  }

  function toggleCQLResults(event) {
    event.preventDefault();
    setDisplayCQLResults(!displayCQLResults);
  }

  function errorMessage(er, i) {
    return (
      <tr key={i}>
        <td>{er.type}</td>
        <td>{er.error.message || er.error.statusText || 'No error message provided'}</td>
      </tr>
    );
  }

  function renderErrors() {
    const errResponses = collector.filter(i => i.error);

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
              {errResponses.map((er, i) => errorMessage(er, i))}
            </tbody>
          </table>
        </div>
      );
    }

    return <div></div>;
  }

  function renderFHIRQueries() {
    return (
      <div className="fhir-queries">
        <h4>FHIR Queries <button onClick={toggleFhirQueries}>[show/hide]</button></h4>
        <div style={{ display: displayFhirQueries ? 'block' : 'none' }}>
          {collector.map((item, i) => {
            const url = i === 0 ? item.url : item.url.slice(item.url.lastIndexOf('/') + 1);
            return (
              <FhirQuery key={i} url={url} data={item.data} />
            );
          })}
        </div>
      </div>
    );
  }

  function renderCQLResults() {
    return (
      <div className="cql-results">
        <h4>CQL Results <button onClick={toggleCQLResults}>[show/hide]</button></h4>

        <div style={{ display: displayCQLResults ? 'block' : 'none' }}>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      </div>
    );
  }

  
  if (!collector) { return null; }

  return (
    <div className="dev-tools">
      <h4>Development Tools <button onClick={toggleDevTools}>[show/hide]</button></h4>

      <div className="dev-tools__disclaimer">
        These development tools are for troubleshooting issues and intended to be used by technical support.
      </div>

      <div style={{ display: displayDevTools ? 'block' : 'none' }}>
        {renderErrors()}
        {renderFHIRQueries()}
        {renderCQLResults()}
      </div>
    </div>
  );
}

DevTools.propTypes = {
  collector: PropTypes.array.isRequired,
  result: PropTypes.object.isRequired
};

export default DevTools;