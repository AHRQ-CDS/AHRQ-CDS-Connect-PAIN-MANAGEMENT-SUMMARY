import React, { Component } from 'react';
import tocbot from 'tocbot';
import _ from 'lodash';

import stringValue from '../utils/stringValue';
import executeElm from '../utils/executeELM';
import factorsElm from '../cql/Factors_to_Consider_in_Managing_Chronic_Pain.json';
import commonsElm from '../cql/CDS_Connect_Commons_for_FHIRv102.json';
import fhirhelpersElm from '../cql/FHIRHelpers.json';
import valueSetDB from '../cql/valueset-db.json';

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

    this.summaryRef = React.createRef();
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

  componentDidMount() {
    tocbot.init({
      tocSelector: '.summary__nav',         // where to render the table of contents
      contentSelector: '.summary__display', // where to grab the headings to build the table of contents
      headingSelector: 'h3',                // which headings to grab inside of the contentSelector element
      positionFixedSelector: '.summary__nav',
      collapseDepth: 0                      // 0 collapses 6 expands all
    });

    setTimeout(()=>{ this.addListeners(this.summaryRef.current); }, 500);
  }

  componentWillUnmount() { // eslint-disable-line class-methods-use-this
    tocbot.destroy();

    document.removeEventListener('scroll', this.throttledScrollListener, { passive: true });
    document.removeEventListener('resize', this.throttledScrollListener, { passive: true });
  }

  addListeners(ref) {
    console.debug('ref: ', ref);

    const summaryStyle = window.getComputedStyle(ref.current);
    this.toc = document.querySelector('.summary__nav');
    this.throttledScrollListener = _.throttle(this.scrollListener.bind(this), 50);

    document.addEventListener('scroll', this.throttledScrollListener, { passive: true });
    document.addEventListener('resize', this.throttledScrollListener, { passive: true });
  }

  scrollListener() {
    const { summary, toc } = this;
    const { bottom } = summary.getBoundingClientRect();
    const windowBottom = window.innerHeight || document.documentElement.clientHeight;

    if ((bottom + parseInt(this.summaryStyle.paddingBottom, 10)) <= windowBottom) {
      toc.classList.add('at-bottom');
      summary.classList.add('is-position-relative');
    } else if (toc.classList.contains('at-bottom')) {
      toc.classList.remove('at-bottom');
      summary.classList.remove('is-position-relative');
    }
  }

  renderSection(data, name, ...properties) {
    const rows = (Array.isArray(data) ? data : [data]).filter(r => r != null);

    return (
      <div className="section h3-wrapper">
        <h3 id={name}>{name}</h3>

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
      return <div>Error: See console for details.</div>;
    }

    const summary = this.state.result.Summary;

    return (
      <div className="landing">
        <Header
          patientName={summary.Patient.Name}
          patientAge={summary.Patient.Age}
          patientGender={summary.Patient.Gender}
        />

        <div className="summary" ref={this.summaryRef}>
          <div className="summary__nav"></div>

          <div className="summary__display">
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
