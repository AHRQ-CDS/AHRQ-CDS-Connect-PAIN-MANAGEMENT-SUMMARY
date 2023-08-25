import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InclusionBanner({ dismissible }) {
  const [displayed, setDisplayed] = useState(true);

  function handleClose() {
    setDisplayed(false);
  }

  return (
    <div
      className="inclusion-banner banner"
      style={{display: displayed ? 'block' : 'none'}}
      role="banner">
      {dismissible &&
        <FontAwesomeIcon className="close-button" icon="times" onClick={handleClose} title="close" />
      }

      <div className="inclusion-banner__tag banner warning-inside">
        This patient does not meet the applicable criteria.
      </div>

      <div className="inclusion-banner__description">
        <strong><FontAwesomeIcon icon="exclamation-circle" title="warning" /> WARNING:</strong> This summary
        applies to patients 18 years or older who meet at least one of the following criteria:

        <ul>
          <li>Has a condition likely to indicate chronic pain</li>
          <li>Has an active opioid medication in the last 180 days</li>
          <li>Has an active nonopioid pain medication in the last 180 days</li>
        </ul>
      </div>
    </div>
  );
}

InclusionBanner.propTypes = {
  dismissible: PropTypes.bool.isRequired
};

export default InclusionBanner;