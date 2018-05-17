import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoModal extends Component {
  render() {
    return (
      <div className="info-modal">
        Info Modal
        <button onClick={this.props.closeModal}>Close Modal</button>
      </div>
    );
  }
}

InfoModal.propTypes = {
  closeModal: PropTypes.func.isRequired
};
