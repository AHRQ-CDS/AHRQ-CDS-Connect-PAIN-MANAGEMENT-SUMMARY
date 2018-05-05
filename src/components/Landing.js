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

  renderSection(data, name, ...properties) {
    const rows = (Array.isArray(data) ? data : [data]).filter(r => r != null);
    const flagged = false; // TODO: hook up
    const flaggedClass = flagged ? 'flagged' : '';

    return (
      <div className="section h3-wrapper">
        <h3 id={name} className="section__header">
          <FontAwesome className={`flag flag-nav ${flaggedClass}`} name="circle" />
          {name}
          <FontAwesome className={`flag flag-summary ${flaggedClass}`} name="circle" />
        </h3>

        <table border="1" width="100%">
          <thead>
            <tr>{properties.map((prop, i) => <th key={i}>{prop}</th>)}</tr>
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

    return (
      <div className="landing">
        <Header
          patientName={summary.Patient.Name}
          patientAge={summary.Patient.Age}
          patientGender={summary.Patient.Gender}
          totalEntries={totalEntries}
        />

        <div className="summary">
          <div className="summary__nav-wrapper"><div className="summary__nav"></div></div>

          <div className="summary__display">
            <div className="summary__display-title">
              Factors to Consider in Managing Chronic Pain
            </div>

            <h4>Meets Inclusion Criteria? {`${summary.Patient.MeetsInclusionCriteria}`}</h4>

            <div className="sections">
              <h2 id="pertinent-medical-history" className="sections__header">
                <MedicalHistoryIcon width="30" height="40" />
                Pertinent Medical History ({numMedicalHistoryEntries})
              </h2>

              {this.renderSection(
                summary.PertinentMedicalHistory.ConditionsAssociatedWithChronicPain,
                'Conditions Associated With Chronic Pain',
                'Name', 'Status', 'Onset'
              )}

              {this.renderSection(
                summary.PertinentMedicalHistory.HighRiskConditionsForOpioidTherapy,
                'High Risk Conditions For Opioid Therapy',
                'Name', 'Status', 'Onset', 'Abatement', 'Visit'
              )}

              <h2 id="pain-assessments" className="sections__header">
                <PainIcon width="35"  height="35" />
                Pain Assessments ({numPainEntries})
              </h2>

              {this.renderSection(
                summary.PainAssessments.NumericPainIntensityAssessments,
                'Numeric Pain Intensity Assessments',
                'Name', 'Score', 'Interpretation', 'Date'
              )}

              {this.renderSection(
                summary.PainAssessments.PainEnjoymentGeneralActivityAssessments,
                'Pain Enjoyment General Activity Assessments',
                'Name', 'Score', 'Interpretation', 'Questions', 'Date'
              )}

              {this.renderSection(
                summary.PainAssessments.STarTBackAssessments,
                'STarT Back Assessments',
                'Name', 'Score', 'Interpretation', 'Date'
              )}

              <h2 id="historical-treatments" className="sections__header">
                <TreatmentsIcon width="36" height="38" />
                Historical Pain-related Treatments ({numTreatmentsEntries})
              </h2>

              {this.renderSection(
                summary.HistoricalTreatments.OpioidMedications,
                'Opioid Medications',
                'Name', 'Type', 'Start', 'End'
              )}

              {this.renderSection(
                summary.HistoricalTreatments.NonOpioidMedications,
                'Non-Opioid Medications',
                'Name', 'Type', 'Start', 'End'
              )}

              {this.renderSection(
                summary.HistoricalTreatments.NonPharmacologicTreatments,
                'Non-Pharmacologic Treatments',
                'Name', 'Type', 'Date'
              )}

              <h2 id="risk-factors-and-assessments" className="sections__header">
                <RiskIcon width="35" height="34" />
                Risk Factors and Assessments ({numRiskEntries})
              </h2>

              {this.renderSection(
                summary.RiskFactorsAndAssessments.PainManagementRiskScreenings,
                'Pain Management Risk Screenings',
                'Name', 'Score', 'Interpretation', 'Date'
              )}

              {this.renderSection(
                summary.RiskFactorsAndAssessments.BenzodiazepineMedications,
                'Benzodiazepine Medications',
                'Name', 'Type', 'Start', 'End'
              )}

              {this.renderSection(
                summary.RiskFactorsAndAssessments.NaloxoneMedications,
                'Naloxone Medications',
                'Name', 'Type', 'Start', 'End'
              )}

              {this.renderSection(
                summary.RiskFactorsAndAssessments.UrineDrugScreens,
                'Urine Drug Screens',
                'Name', 'Score', 'Interpretation', 'Date'
              )}

              {this.renderSection(
                summary.RiskFactorsAndAssessments.MostRecentMME,
                'Most Recent MME',
                'Name', 'Result', 'Date'
              )}

              {this.renderSection(
                summary.MiscellaneousItems.StoolSoftenersAndLaxatives,
                'Stool Softeners and Laxatives',
                'Name', 'Type', 'Start', 'End'
              )}
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
