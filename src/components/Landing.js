import React, { Component } from 'react';
import tocbot from 'tocbot';

import executeElm from '../utils/executeELM';
import sumit from '../utils/sumit';

import factorsElm from '../cql/Factors_to_Consider_in_Managing_Chronic_Pain.json';
import commonsElm from '../cql/CDS_Connect_Commons_for_FHIRv102.json';
import fhirhelpersElm from '../cql/FHIRHelpers.json';
import valueSetDB from '../cql/valueset-db.json';

import Header from './Header';
import Summary from './Summary';
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
    } catch (err) {
      console.error(err);
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
          numFlaggedEntries={0} // TODO: hook up
        />

        <Summary
          summary={summary}
          numMedicalHistoryEntries={numMedicalHistoryEntries}
          numPainEntries={numPainEntries}
          numTreatmentsEntries={numTreatmentsEntries}
          numRiskEntries={numRiskEntries}
        />

        <DevTools
          collector={this.state.collector}
          result={this.state.result}
        />
      </div>
    );
  }
}
