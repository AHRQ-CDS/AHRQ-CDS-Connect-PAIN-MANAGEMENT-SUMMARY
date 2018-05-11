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
          <strong><FontAwesome name="exclamation-circle" /> DISCLAIMER:</strong> This CDS is not intended for patients
          who meet any of the following criteria:

          <ul>
            <li>Younger than 18 years of age</li>
            <li>Undergoing end-of-life care (hospice or pallitive)</li>
            <li>Undergoing active cancer treatment</li>
          </ul>
        </div>

        <div className="exclusion-banner__footer">
          {/* TODO: may add at a later date */}
        </div>
      </div>
    );
  }
}
