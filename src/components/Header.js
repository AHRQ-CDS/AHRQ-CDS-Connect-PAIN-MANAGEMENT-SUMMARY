import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Header extends Component {
  render() {
    const { patientName, patientAge, patientGender } = this.props;

    return (
      <header className="header">
        <div className="header__logo">
          <img className="header__logo-img" src="/assets/images/cds-connect-logo.png" alt="cds connect logo" />
          <span className="header__logo-text">CDS Connect</span>
        </div>

        <div className="header__summary">
          <div className="header__summary-patient">
            <FontAwesome className="patient-icon" name="user-circle" />

            <div className="patient-info">
              <div className="patient-name">{patientName}</div>

              <div className="patient-demographics">
                <span className="patient-age">{patientAge} YRS</span>
                <span className="patient-gender">{patientGender}</span>
              </div>
            </div>
          </div>

          <div className="header__summary-dashboard">
            <div className="entries">
              <div className="entries-count total">17</div>
              <div className="entries-label">Total Entries</div>
            </div>

            <div className="entries">
              <div className="entries-count medium-risk">1</div>
              <div className="entries-label">Medium Risk Entries</div>
            </div>

            <div className="entries">
              <div className="entries-count high-risk">1</div>
              <div className="entries-label">High Risk Entries</div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  patientName: PropTypes.string.isRequired,
  patientAge: PropTypes.number.isRequired,
  patientGender: PropTypes.string.isRequired
};
