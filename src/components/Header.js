import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  render() {
    const {
      patientName, patientAge, patientGender, totalEntries, numFlaggedEntries, meetsInclusionCriteria
    } = this.props;

    return (
      <header className="header">
        <div className="header__logo">
          {/* For development - adds a link back to sandbox patient list */}
          {/* <a className="header__return-link" href="/launch.html" alt="back to patient list">
            <FontAwesomeIcon className="return-icon" icon="chevron-left" title="back" />
          </a> */}

          <img className="header__logo-img" src={process.env.PUBLIC_URL + "/assets/images/logo.png"}

            alt="cds connect logo" />
			{/* <span className="header__logo-text">COSRI</span> */}
		  <span className="header__tagline-text">Built with CDS Connect from AHRQ!</span>
        </div>

        <div className="header__summary">
          <div className="header__summary-patient">
            <FontAwesomeIcon className="patient-icon" icon="user-circle" title="patient" />

            <div className="patient-info">
              <h1 className="patient-name">{patientName}</h1>

              <div className="patient-demographics">
                <span className="patient-age" aria-label="years">{patientAge} YRS</span>
                <span className="patient-gender">{patientGender}</span>
              </div>
            </div>
          </div>

          {meetsInclusionCriteria &&
			  <div className="header__summary-dashboard">
              <div className="entries">
                <div className="entries-count total">{totalEntries}</div>
                <div className="entries-label">Total Entries</div>
              </div>

              <div className="entries">
                <div className="entries-count flagged">{numFlaggedEntries}</div>
                <div className="entries-label">Total<br/>Flags</div>
              </div>
            </div>
          }
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
  numFlaggedEntries: PropTypes.number.isRequired,
  meetsInclusionCriteria: PropTypes.bool.isRequired
};
