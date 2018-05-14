import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Header extends Component {
  render() {
    const { patientName, patientAge, patientGender, totalEntries, numFlaggedEntries } = this.props;

    return (
      <header className="header">
        <div className="header__logo">
          <img className="header__logo-img" src={process.env.PUBLIC_URL + "/assets/images/cds-connect-logo.png"}
            alt="cds connect logo" />
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
              <div className="entries-count total">{totalEntries}</div>
              <div className="entries-label">Total Entries</div>
            </div>

            <div className="entries">
              <div className="entries-count flagged">{numFlaggedEntries}</div>
              <div className="entries-label">Flagged Entries</div>
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
  patientGender: PropTypes.string.isRequired,
  totalEntries: PropTypes.number.isRequired,
  numFlaggedEntries: PropTypes.number.isRequired
};
