import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import stringValue from '../utils/stringValue';

import MedicalHistoryIcon from '../icons/MedicalHistoryIcon';
import PainIcon from '../icons/PainIcon';
import TreatmentsIcon from '../icons/TreatmentsIcon';
import RiskIcon from '../icons/RiskIcon';
import CQLIcon from '../icons/CQLIcon';

export default class Summary extends Component {
  renderSubSection(data, name, ...properties) {
    const rows = (Array.isArray(data) ? data : [data]).filter(r => r != null);
    const flagged = false; // TODO: hook up
    const flaggedClass = flagged ? 'flagged' : '';

    return (
      <div className="sub-section h3-wrapper">
        <h3 id={name} className="sub-section__header">
          <FontAwesome className={`flag flag-nav ${flaggedClass}`} name="circle" />
          {name}
          <FontAwesome className={`flag flag-summary ${flaggedClass}`} name="circle" />
        </h3>

        <table className="sub-section__table">
          <thead>
            <tr>
              <th></th>
              {properties.map((prop, i) =>
                <th key={i}><span>{prop}</span></th>
              )}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) =>
              <tr key={i}>
                <td className="flag-col">
                  <FontAwesome className={`flag flag-entry ${flaggedClass}`} name="circle" />
                </td>

                {properties.map((prop, i) =>
                  <td key={i}>{stringValue(row[prop])}</td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
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

              {this.renderSubSection(
                summary.PertinentMedicalHistory.ConditionsAssociatedWithChronicPain,
                'Conditions Associated With Chronic Pain',
                'Name', 'Status', 'Onset'
              )}

              {this.renderSubSection(
                summary.PertinentMedicalHistory.HighRiskConditionsForOpioidTherapy,
                'High Risk Conditions For Opioid Therapy',
                'Name', 'Status', 'Onset', 'Abatement', 'Visit'
              )}
            </div>

            <div className="section">
              <h2 id="pain-assessments" className="section__header">
                <PainIcon width="35"  height="35" />

                <span>
                  Pain Assessments ({numPainEntries})
                  <FontAwesome className={`flag flag-header ${flaggedClass}`} name="circle" />
                </span>
              </h2>

              {this.renderSubSection(
                summary.PainAssessments.NumericPainIntensityAssessments,
                'Numeric Pain Intensity Assessments',
                'Name', 'Score', 'Interpretation', 'Date'
              )}

              {this.renderSubSection(
                summary.PainAssessments.PainEnjoymentGeneralActivityAssessments,
                'Pain Enjoyment General Activity Assessments',
                'Name', 'Score', 'Interpretation', 'Questions', 'Date'
              )}

              {this.renderSubSection(
                summary.PainAssessments.STarTBackAssessments,
                'STarT Back Assessments',
                'Name', 'Score', 'Interpretation', 'Date'
              )}
            </div>

            <div className="section">
              <h2 id="historical-treatments" className="section__header">
                <TreatmentsIcon width="36" height="38" />

                <span>
                  Historical Pain-related Treatments ({numTreatmentsEntries})
                  <FontAwesome className={`flag flag-header ${flaggedClass}`} name="circle" />
                </span>
              </h2>

              {this.renderSubSection(
                summary.HistoricalTreatments.OpioidMedications,
                'Opioid Medications',
                'Name', 'Type', 'Start', 'End'
              )}

              {this.renderSubSection(
                summary.HistoricalTreatments.NonOpioidMedications,
                'Non-Opioid Medications',
                'Name', 'Type', 'Start', 'End'
              )}

              {this.renderSubSection(
                summary.HistoricalTreatments.NonPharmacologicTreatments,
                'Non-Pharmacologic Treatments',
                'Name', 'Type', 'Date'
              )}
            </div>

            <div className="section">
              <h2 id="risk-factors-and-assessments" className="section__header">
                <RiskIcon width="35" height="34" />

                <span>
                  Risk Factors and Assessments ({numRiskEntries})
                  <FontAwesome className={`flag flag-header ${flaggedClass}`} name="circle" />
                </span>
              </h2>

              {this.renderSubSection(
                summary.RiskFactorsAndAssessments.PainManagementRiskScreenings,
                'Pain Management Risk Screenings',
                'Name', 'Score', 'Interpretation', 'Date'
              )}

              {this.renderSubSection(
                summary.RiskFactorsAndAssessments.BenzodiazepineMedications,
                'Benzodiazepine Medications',
                'Name', 'Type', 'Start', 'End'
              )}

              {this.renderSubSection(
                summary.RiskFactorsAndAssessments.NaloxoneMedications,
                'Naloxone Medications',
                'Name', 'Type', 'Start', 'End'
              )}

              {this.renderSubSection(
                summary.RiskFactorsAndAssessments.UrineDrugScreens,
                'Urine Drug Screens',
                'Name', 'Score', 'Interpretation', 'Date'
              )}

              {this.renderSubSection(
                summary.RiskFactorsAndAssessments.MostRecentMME,
                'Most Recent MME',
                'Name', 'Result', 'Date'
              )}

              {this.renderSubSection(
                summary.MiscellaneousItems.StoolSoftenersAndLaxatives,
                'Stool Softeners and Laxatives',
                'Name', 'Type', 'Start', 'End'
              )}
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
