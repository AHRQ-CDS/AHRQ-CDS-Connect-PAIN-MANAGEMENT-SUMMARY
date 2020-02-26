import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ExclusionBanner extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      displayed: true
    };
  }

  handleClose = () => {
    this.setState({ displayed: false });
  }

  render() {
    return (
      <div
        className="exclusion-banner banner"
        style={{display: this.state.displayed ? 'block' : 'none'}}
        role="banner">
        <FontAwesomeIcon className="close-button" icon="times" title="close" onClick={this.handleClose} />

        <div className="exclusion-banner__description">
          <strong><FontAwesomeIcon icon="exclamation-circle" title="notice" /> TAKE NOTICE:</strong> This summary is not
          intended for patients who are undergoing <b>end-of-life care</b> (hospice or palliative), <b>inpatient treatment</b>, 
          or <b>active cancer treatment</b>.
        </div>
      </div>
    );
  }
}
