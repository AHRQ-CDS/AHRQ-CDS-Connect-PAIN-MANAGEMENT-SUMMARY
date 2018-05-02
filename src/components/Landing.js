import React, { Component } from 'react';
import executeElm from '../utils/executeELM';
import factorsElm from '../cql/Factors_to_Consider_in_Managing_Chronic_Pain.json';
import commonsElm from '../cql/CDS_Connect_Commons_for_FHIRv102.json';
import fhirhelpersElm from '../cql/FHIRHelpers.json';
import valueSetDB from '../cql/valueset-db.json';
import FhirQuery from './FhirQuery';

function stringValue(value) {
  if (value == null) return '';

  if (Array.isArray(value)) {
    return `[${value.map(v => stringValue(v)).join(', ')}]`;
  } else if (value.Start || value.End) {
    return `${value.Start || '(no start)'} - ${value.End || '(no end)'}`
  } else if (value.Low || value.High) {
    return `${value.Low || '(no low)'} - ${value.High || '(no high)'}`
  } else if (typeof value === 'object') {
    return `{ ${Object.keys(value).map(k => `${k}: ${stringValue(value[k])}`)} }`
  }
  return value.toString();
}

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
  }

  toggleFhirQueries = (event) => {
    event.preventDefault();
    this.setState({ displayFhirQueries: !this.state.displayFhirQueries });
  }

  toggleCQLResults = (event) => {
    event.preventDefault();
    this.setState({ displayCQLResults: !this.state.displayCQLResults });
  }

  componentWillMount() {
    const elmDependencies = {
      CDS_Connect_Commons_for_FHIRv102: commonsElm,
      FHIRHelpers: fhirhelpersElm
    };

    executeElm(factorsElm, elmDependencies, valueSetDB, this.state.collector, (result, error) => {
      this.setState({ loading: false });

      if (error) {
        console.error(error);
        return;
      }

      this.setState({ result });
    });
  }

  renderSection(data, name, ...properties) {
    if (!Array.isArray(data)) {
      data = data != null ? [data] : [];
    }

    return (
      <div>
        <h3>{name}</h3>
        <table border="1" width="100%">
          <thead>
            <tr>{properties.map((prop, i) => <th key={i}>{prop}</th>)}</tr>
          </thead>

          <tbody>
            {data.map((row, i) =>
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

  errorMessage(er, i) {
    let msg = 'See query info below for details';
    if (er.error.responseJSON) {
      msg = er.error.responseJSON.ExceptionMessage || er.error.responseJSON.Message;
    } else if (er.error.statusText) {
      msg = er.error.statusText;
    }

    return (
      <tr key={i}>
        <td>{er.config.type}</td>
        <td>{msg}</td>
      </tr>
    );
  }

  renderErrors() {
    const errResponses = this.state.collector.filter(i => i.error);

    if (errResponses.length) {
      return (
        <div className="errors">
          <h3>{errResponses.length} Errors</h3>

          <table id="errors" border="1" width="100%">
            <thead>
              <tr>
                <th>Resource</th>
                <th>Error</th>
              </tr>
            </thead>

            <tbody>
              {errResponses.forEach((er, i) => this.errorMessage(er, i))}
            </tbody>
          </table>
        </div>
      );
    }

    return <div></div>;
  }

  renderFHIRQueries() {
    return (
      <div>
        <h3>FHIR Queries (<a href="#" onClick={this.toggleFhirQueries}>show/hide</a>)</h3>
        <div style={{ display: this.state.displayFhirQueries ? 'block' : 'none' }}>
          {this.state.collector.map((item, i) => {
            const url = i === 0 ? item.config.url : item.config.url.slice(item.config.url.lastIndexOf('/') + 1);
            return (
              <FhirQuery url={url} query={item} key={i} />
            );
          })}
        </div>
      </div>
    );
  }

  renderCQLResults() {
    return (
      <div>
        <h3>CQL Results (<a href="#" onClick={this.toggleCQLResults}>show/hide</a>)</h3>
        <div style={{ display: this.state.displayCQLResults ? 'block' : 'none' }}>
          <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (this.state.result == null) {
      return <div>Error: See console for details.</div>;
    }

    const summary = this.state.result.Summary;

    return (
      <div>
        <h2>{summary.Patient.Name}, {summary.Patient.Age} years, {summary.Patient.Gender}</h2>

        <h3>Meets Inclusion Criteria? {`${summary.Patient.MeetsInclusionCriteria}`}</h3>

        <div id="sections">
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
            'Most Recent MME',
            'Name', 'Type', 'Start', 'End'
          )}
        </div>

        {this.renderErrors()}
        {this.renderFHIRQueries()}
        {this.renderCQLResults()}
      </div>
    );
  }
}
