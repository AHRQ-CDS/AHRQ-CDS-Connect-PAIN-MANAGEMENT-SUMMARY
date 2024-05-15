import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FhirQuery({ data, url }) {
  const [displayed, setDisplayed] = useState(false);

  function toggleShowHide(event) {
    event.preventDefault();
    setDisplayed(!displayed);
  }

  if (!data) { return null; }

  return (
    <div className="fhir-query">
      <b>{url}</b> <button href="#" onClick={toggleShowHide}>[show/hide]</button>
      <pre style={{display: displayed ? 'block' : 'none'}}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

FhirQuery.propTypes = {
  data: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default FhirQuery;
