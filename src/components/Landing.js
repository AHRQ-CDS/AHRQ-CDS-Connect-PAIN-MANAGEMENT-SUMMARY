import React, { Component } from 'react';
import tocbot from 'tocbot';
import FontAwesome from 'react-fontawesome';

import stringValue from '../utils/stringValue';
import executeElm from '../utils/executeELM';
import sumit from '../utils/sumit';

import factorsElm from '../cql/Factors_to_Consider_in_Managing_Chronic_Pain.json';
import commonsElm from '../cql/CDS_Connect_Commons_for_FHIRv102.json';
import fhirhelpersElm from '../cql/FHIRHelpers.json';
import valueSetDB from '../cql/valueset-db.json';

import MedicalHistoryIcon from '../icons/MedicalHistoryIcon';
import PainIcon from '../icons/PainIcon';
import TreatmentsIcon from '../icons/TreatmentsIcon';
import RiskIcon from '../icons/RiskIcon';
import CQLIcon from '../icons/CQLIcon';

import Header from './Header';
import DevTools from './DevTools';

export default class Landing extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      result: null,
      loading: true,
      collector: [],
      displayFhirQueries: false,
      displayCQLResults: false
    };

    this.tocInitialized = false;
  }

  componentWillMount() {
    const elmDependencies = {
      CDS_Connect_Commons_for_FHIRv102: commonsElm,
      FHIRHelpers: fhirhelpersElm
    };

    try {
      executeElm(factorsElm, elmDependencies, valueSetDB, this.state.collector, (result, error) => {
        this.setState({ loading: false });

        if (error) {
          console.error(error);
          return;
        }

        this.setState({ result });
      });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  }

  componentDidUpdate() {
    if (!this.tocInitialized && !this.state.loading && this.state.result) {
      tocbot.init({
        tocSelector: '.summary__nav',           // where to render the table of contents
        contentSelector: '.summary__display',   // where to grab the headings to build the table of contents
        headingSelector: 'h2, h3',              // which headings to grab inside of the contentSelector element
        positionFixedSelector: '.summary__nav', // element to add the positionFixedClass to
        collapseDepth: 0,                       // how many heading levels should not be collpased
        includeHtml: true                       // include the HTML markup from the heading node, not just the text
      });

      this.tocInitialized = true;
    }
  }

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

        <table border="1" width="100%">
          <thead>
            <tr>
              {properties.map((prop, i) =>
                <th key={i} className="">{prop}</th>
              )}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) =>
              <tr key={i}>
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
    if (this.state.loading) {
      return <div className="loading">Loading...</div>;
    }

    if (this.state.result == null) {
      return <div className="error">Error: See console for details.</div>;
    }

    const summary = this.state.result.Summary;
    const numMedicalHistoryEntries = sumit(summary.PertinentMedicalHistory || {});
    const numPainEntries = sumit(summary.PainAssessments || {});
    const numTreatmentsEntries = sumit(summary.HistoricalTreatments || {});
    const numRiskEntries =
      sumit(summary.RiskFactorsAndAssessments || {}) +
      sumit(summary.MiscellaneousItems || {}); // TODO: update when CQL updates
    const totalEntries = numMedicalHistoryEntries + numPainEntries + numTreatmentsEntries + numRiskEntries;
    const flagged = false; // TODO: hook up
    const flaggedClass = flagged ? 'flagged' : '';

    return (
      <div className="landing">
        <Header
          patientName={summary.Patient.Name}
          patientAge={summary.Patient.Age}
          patientGender={summary.Patient.Gender}
          totalEntries={totalEntries}
          numFlaggedEntries={0} // TODO: hook up
        />

        <div className="summary">
          <div className="summary__nav-wrapper"><div className="summary__nav"></div></div>

          <div className="summary__display">
            <div className="summary__display-title">
              <CQLIcon width="48" height="20" />
              Factors to Consider in Managing Chronic Pain
            </div>

            <h4>Meets Inclusion Criteria? {`${summary.Patient.MeetsInclusionCriteria}`}</h4>

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

            <DevTools
              collector={this.state.collector}
              result={this.state.result}
            />
          </div>
        </div>
      </div>
    );
  }
}
