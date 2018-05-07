import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import summaryMap from './summary.json';
import * as helpers from '../helpers';

import MedicalHistoryIcon from '../icons/MedicalHistoryIcon';
import PainIcon from '../icons/PainIcon';
import TreatmentsIcon from '../icons/TreatmentsIcon';
import RiskIcon from '../icons/RiskIcon';
import CQLIcon from '../icons/CQLIcon';

export default class Summary extends Component {
  renderTable(table, data, index) {
    const entries = (Array.isArray(data) ? data : [data]).filter(r => r != null);
    const flagged = false; // TODO: hook up
    const flaggedClass = flagged ? 'flagged' : '';
    const headers = Object.keys(table.headers);
    const headersData = Object.values(table.headers);

    return (
      <div key={index} className="table">
        <table className="sub-section__table">
          <thead>
            <tr>
              <th></th>
              {headers.map((header, i) =>
                <th key={i}><span>{header.key ? header.key : header}</span></th>
              )}
            </tr>
          </thead>

          <tbody>
            {entries.map((entry, i) => {
              if (table.trigger && entry[table.trigger] == null) return null;

              return (
                <tr key={i}>
                  <td className="flag-col">
                    <FontAwesome className={`flag flag-entry ${flaggedClass}`} name="circle" />
                  </td>

                  {headersData.map((headerData, i) => {
                    let value = entry[headerData];
                    if (headerData.formatter) {
                      let formatterArguments = headerData.formatterArguments || [];
                      value = helpers[headerData.formatter](entry[headerData.key], ...formatterArguments);
                    }

                    return (
                      <td key={i}>{value}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  renderSection(section) {
    const sectionMap = summaryMap[section];

    return sectionMap.map((subSection) => {
      const data = this.props.summary[subSection.dataKeySource][subSection.dataKey];
      const flagged = false; // TODO: hook up
      const flaggedClass = flagged ? 'flagged' : '';

      return (
        <div key={subSection.name} className="sub-section h3-wrapper">
          <h3 id={subSection.name} className="sub-section__header">
            <FontAwesome className={`flag flag-nav ${flaggedClass}`} name="circle" />
            {subSection.name}
            <FontAwesome className={`flag flag-summary ${flaggedClass}`} name="circle" />
          </h3>

          {subSection.tables.map((table, index) => this.renderTable(table, data, index))}
         </div>
      );
    });
  }

  render() {
    const { summary, numMedicalHistoryEntries, numPainEntries, numTreatmentsEntries, numRiskEntries } = this.props;
    const flagged = false; // TODO: hook up
    const flaggedClass = flagged ? 'flagged' : '';

    if (!summary) { return null; }

    return (
      <div className="summary">
        <div className="summary__nav-wrapper"><div className="summary__nav"></div></div>

        <div className="summary__display">
          <div className="summary__display-title">
            <CQLIcon width="48" height="20" />
            Factors to Consider in Managing Chronic Pain
          </div>

          <div className="banner">
            Meets Inclusion Criteria? {`${summary.Patient.MeetsInclusionCriteria}`}
          </div>

          <div className="sections">
            <div className="section">
              <h2 id="pertinent-medical-history" className="section__header">
                <MedicalHistoryIcon width="30" height="40" />

                <span>
                  Pertinent Medical History ({numMedicalHistoryEntries})
                  <FontAwesome className={`flag flag-header ${flaggedClass}`} name="circle" />
                </span>
              </h2>

              {this.renderSection("PertinentMedicalHistory")}
            </div>

            <div className="section">
              <h2 id="pain-assessments" className="section__header">
                <PainIcon width="35"  height="35" />

                <span>
                  Pain Assessments ({numPainEntries})
                  <FontAwesome className={`flag flag-header ${flaggedClass}`} name="circle" />
                </span>
              </h2>

              {this.renderSection("PainAssessments")}
            </div>

            <div className="section">
              <h2 id="historical-treatments" className="section__header">
                <TreatmentsIcon width="36" height="38" />

                <span>
                  Historical Pain-related Treatments ({numTreatmentsEntries})
                  <FontAwesome className={`flag flag-header ${flaggedClass}`} name="circle" />
                </span>
              </h2>

              {this.renderSection("HistoricalTreatments")}
            </div>

            <div className="section">
              <h2 id="risk-factors-and-assessments" className="section__header">
                <RiskIcon width="35" height="34" />

                <span>
                  Risk Factors and Assessments ({numRiskEntries})
                  <FontAwesome className={`flag flag-header ${flaggedClass}`} name="circle" />
                </span>
              </h2>

              {this.renderSection("RiskFactorsAndAssessments")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  summary: PropTypes.object.isRequired,
  numMedicalHistoryEntries: PropTypes.number.isRequired,
  numPainEntries: PropTypes.number.isRequired,
  numTreatmentsEntries: PropTypes.number.isRequired,
  numRiskEntries: PropTypes.number.isRequired
};
