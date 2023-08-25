import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ExclusionBanner() {
  const [displayed, setDisplayed] = useState(true);

  function handleClose() {
    setDisplayed(false);
  }

  return (
    <div
      className="exclusion-banner banner"
      style={{display: displayed ? 'block' : 'none'}}
      role="banner">
      <FontAwesomeIcon className="close-button" icon="times" title="close" onClick={handleClose} />

      <div className="exclusion-banner__description">
        <strong><FontAwesomeIcon icon="exclamation-circle" title="notice" /> TAKE NOTICE:</strong> This summary is not
        intended for patients who are undergoing <b>end-of-life care</b> (hospice or palliative) or <b>active cancer
        treatment</b>, or who have <b>sickle cell disease</b>.
      </div>
    </div>
  );
}
