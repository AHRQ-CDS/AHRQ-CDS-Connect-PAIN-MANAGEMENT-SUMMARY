import React, { Component } from 'react';
import tocbot from 'tocbot';
import FontAwesome from 'react-fontawesome';

import executeElm from '../utils/executeELM';
import sumit from '../helpers/sumit';
import flagit from '../helpers/flagit';
import summaryMap from './summary.json';

import factorsElm from '../cql/Factors_to_Consider_in_Managing_Chronic_Pain.json';
import commonsElm from '../cql/CDS_Connect_Commons_for_FHIRv102.json';
import fhirhelpersElm from '../cql/FHIRHelpers.json';
import valueSetDB from '../cql/valueset-db.json';

import Header from './Header';
import Summary from './Summary';
import Spinner from '../elements/Spinner';

let uuid = 0;

function generateUuid() {
  return ++uuid; // eslint-disable-line no-plusplus
}

export default class Landing extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      result: null,
      loading: true,
      collector: []
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

        const { sectionFlags, flaggedCount } = this.processSummary(result.Summary);

        this.setState({ result, sectionFlags, flaggedCount });
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

  processSummary(summary) {
    const sectionFlags = {};
    const sectionKeys = Object.keys(summaryMap);
    let flaggedCount = 0;

    sectionKeys.forEach((sectionKey, i) => { // for each section
      sectionFlags[sectionKey] = {};

      summaryMap[sectionKey].forEach((subSection) => { // for each sub section
        const data = summary[subSection.dataKeySource][subSection.dataKey];
        const entries = (Array.isArray(data) ? data : [data]).filter(r => r != null);

        if (entries.length > 0) {
          sectionFlags[sectionKey][subSection.dataKey] = entries.reduce((flaggedEntries, entry) => {
            if (entry._id == null) {
              entry._id = generateUuid();
            }

            const entryFlag = flagit(entry, subSection, summary);

            if (entryFlag) {
              flaggedEntries.push({ 'entryId': entry._id, 'flagText': entryFlag });
              flaggedCount += 1;
            }

            return flaggedEntries;
          }, []);
        } else {
          const sectionFlagged = flagit(null, subSection, summary);
          sectionFlags[sectionKey][subSection.dataKey] = sectionFlagged;

          if (sectionFlagged) {
            flaggedCount += 1;
          }
        }
      });
    });

    return { sectionFlags, flaggedCount };
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    if (this.state.result == null) {
      return (
        <div className="banner error">
          <FontAwesome name="exclamation-circle" /> Error: See console for details.
        </div>
      );
    }

    const summary = this.state.result.Summary;
    const { sectionFlags, flaggedCount } = this.state;
    const numMedicalHistoryEntries = sumit(summary.PertinentMedicalHistory || {});
    const numPainEntries = sumit(summary.PainAssessments || {});
    const numTreatmentsEntries = sumit(summary.HistoricalTreatments || {});
    const numRiskEntries =
      sumit(summary.RiskConsiderations || {}) +
      sumit(summary.MiscellaneousItems || {}); // TODO: update when CQL updates
    const totalEntries = numMedicalHistoryEntries + numPainEntries + numTreatmentsEntries + numRiskEntries;

    return (
      <div className="landing">
        <Header
          patientName={summary.Patient.Name}
          patientAge={summary.Patient.Age}
          patientGender={summary.Patient.Gender}
          totalEntries={totalEntries}
          numFlaggedEntries={flaggedCount}
          meetsInclusionCriteria={summary.Patient.MeetsInclusionCriteria}
        />

        <Summary
          summary={summary}
          sectionFlags={sectionFlags}
          collector={this.state.collector}
          result={this.state.result}
          numMedicalHistoryEntries={numMedicalHistoryEntries}
          numPainEntries={numPainEntries}
          numTreatmentsEntries={numTreatmentsEntries}
          numRiskEntries={numRiskEntries}
        />
      </div>
    );
  }
}
