import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

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
      <div className="exclusion-banner banner" style={{display: this.state.displayed ? 'block' : 'none'}}>
        <FontAwesome className="close-button" name="close" onClick={this.handleClose} />

        <div className="exclusion-banner__description">
          <strong><FontAwesome name="exclamation-circle" /> DISCLAIMER:</strong> This summary is not intended
          for patients who are undergoing end-of-life care (hospice or pallitive) or active cancer treatment.
        </div>
      </div>
    );
  }
}
