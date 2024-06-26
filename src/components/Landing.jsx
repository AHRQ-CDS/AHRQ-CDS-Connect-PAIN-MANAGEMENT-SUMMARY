import React, { useEffect, useRef, useState } from 'react';
import tocbot from 'tocbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import executeElm from '../utils/executeELM';
import sumit from '../helpers/sumit';
import flagit from '../helpers/flagit';
import summaryMap from './summaryMap.json';

import Header from './Header';
import Summary from './Summary';
import Spinner from '../elements/Spinner';

let uuid = 0;

function generateUuid() {
  return ++uuid; // eslint-disable-line no-plusplus
}

export default function Landing() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sectionFlags, setSectionFlags] = useState();
  const [flaggedCount, setFlaggedCount] = useState();
  const collector = useRef([]);
  const tocInitialized = useRef(false);

  // Only run once (formerly componentDidMount)
  useEffect(() => {
    let isMounted = true;
    executeElm(collector.current).then((result) => {
      if(isMounted) {
        setLoading(false);
        const flagInfo = processSummary(result.Summary);
        setSectionFlags(flagInfo.sectionFlags);
        setFlaggedCount(flagInfo.flaggedCount);
        setResult(result);
      }
    }).catch((err) => {
      if (isMounted) {
        console.error(err);
        setLoading(false);
      }
    });
    // Clean-up:
    return () => {
      isMounted = false;
    }
  }, []);

  // Run on chnages to loading or result (formerly componentDidUpdate)
  useEffect(() => {
    if (!tocInitialized.current && !loading && result) {
      tocbot.init({
        tocSelector: '.summary__nav',           // where to render the table of contents
        contentSelector: '.summary__display',   // where to grab the headings to build the table of contents
        headingSelector: 'h2, h3',              // which headings to grab inside of the contentSelector element
        positionFixedSelector: '.summary__nav', // element to add the positionFixedClass to
        collapseDepth: 0,                       // how many heading levels should not be collpased
        includeHtml: true                       // include the HTML markup from the heading node, not just the text
      });

      tocInitialized.current = true;
    }

    if (result && result.Summary.Patient.Name) {
      const patientName = result.Summary.Patient.Name;
      document.title = `Pain Management Summary - ${patientName}`;
    }
  }, [loading, result]);

  if (loading) {
    return <Spinner />;
  }

  if (result == null) {
    return (
      <div className="banner error">
        <FontAwesomeIcon icon="exclamation-circle" title="error" /> Error: See console for details.
      </div>
    );
  }

  const summary = result.Summary;
  const numMedicalHistoryEntries = sumit(summary.PertinentMedicalHistory || {});
  const numPainEntries = sumit(summary.PainAssessments || {});
  const numTreatmentsEntries = sumit(summary.HistoricalTreatments || {});
  const numRiskEntries =
    sumit(summary.RiskConsiderations || {}) +
    sumit(summary.MiscellaneousItems || {}); // TODO: update when CQL updates
  const totalEntries = numMedicalHistoryEntries + numPainEntries + numTreatmentsEntries + numRiskEntries;

  return (
    <div className="landing">
      <div id="skiptocontent"><a href="#maincontent">skip to main content</a></div>

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
        collector={collector.current}
        result={result}
        numMedicalHistoryEntries={numMedicalHistoryEntries}
        numPainEntries={numPainEntries}
        numTreatmentsEntries={numTreatmentsEntries}
        numRiskEntries={numRiskEntries}
      />
    </div>
  );
}

function getAnalyticsData(endpoint, apikey, summary) {
  const meetsInclusionCriteria = summary.Patient.MeetsInclusionCriteria;
  const applicationAnalytics = {
    meetsInclusionCriteria
  };

  if (meetsInclusionCriteria) {
    let totalCount = 0;
    applicationAnalytics.sections = [];

    const cloneSections = JSON.parse(JSON.stringify(summary));
    delete cloneSections.Patient;

    // Build total number of entries for each subsection of the summary.
    Object.keys(cloneSections).forEach((sectionKey, i) => {
      applicationAnalytics.sections.push({ section: sectionKey, subSections: [] });
      Object.keys(cloneSections[sectionKey]).forEach(subSectionKey => {
        const subSection = cloneSections[sectionKey][subSectionKey];
        let count;
        if (subSection instanceof Array) count = subSection.length;
        else if (subSection instanceof Object) count = 1;
        else count = 0;
        totalCount += count;
        applicationAnalytics.sections[i].subSections.push({
          subSection: subSectionKey, numEntries: count
        });
      });
    });

    applicationAnalytics.totalNumEntries = totalCount;
  }

  let jsonBody = JSON.stringify(applicationAnalytics);

  const requestOptions = {
    body: jsonBody,
    headers: {
      'x-api-key': `${apikey}`,
      'Content-Type': 'application/json',
      'Content-Length': jsonBody.length
    },
    method: 'POST'
  };

  fetch(`${endpoint}`, requestOptions)
    .catch(err => { console.log(err) });
}

function processSummary(summary) {
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

  // Get the configured endpoint to use for POST for app analytics
  fetch(`${import.meta.env.BASE_URL}config.json`)
    .then(response => response.json())
    .then(config => {
      // Only provide analytics if the endpoint has been set
      if (config.analytics_endpoint) {
        getAnalyticsData(config.analytics_endpoint, config.x_api_key, summary);
      }
    })
    .catch(err => { console.log(err) });

  return { sectionFlags, flaggedCount };
}