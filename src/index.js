import factorsElm from './cql/Factors_to_Consider_in_Managing_Chronic_Pain.json';
import commonsElm from './cql/CDS_Connect_Commons_for_FHIRv102.json';
import fhirhelpersElm from './cql/FHIRHelpers.json';
import valueSetDB from './cql/valueset-db.json';
import executeElm from './executeELM';

const elmDependencies = {
  CDS_Connect_Commons_for_FHIRv102: commonsElm,
  FHIRHelpers: fhirhelpersElm
};

const collector = [];

executeElm(factorsElm, elmDependencies, valueSetDB, collector, (result, error) => {
  const loadingDiv = document.getElementById('loading');
  if (error) {
    loadingDiv.innerHTML = 'Error: See console for details.<br/>', error.toString();
    console.error(error);
    return;
  }

  const summary = result.Summary;

  document.getElementById('name').innerHTML = summary.Patient.Name;
  document.getElementById('age').innerHTML = summary.Patient.Age + ' years';
  document.getElementById('gender').innerHTML = summary.Patient.Gender;
  document.getElementById('isIncluded').innerHTML = summary.Patient.MeetsInclusionCriteria;

  const sections = document.getElementById('sections');

  buildSection(sections, summary,
    'Conditions Associated With Chronic Pain', 'PertinentMedicalHistory.ConditionsAssociatedWithChronicPain',
    'Name', 'Status', 'Onset'
  );

  buildSection(sections, summary,
    'High Risk Conditions For Opioid Therapy', 'PertinentMedicalHistory.HighRiskConditionsForOpioidTherapy',
    'Name', 'Status', 'Onset', 'Abatement', 'Visit'
  );

  buildSection(sections, summary,
    'Numeric Pain Intensity Assessments', 'PainAssessments.NumericPainIntensityAssessments',
    'Name', 'Score', 'Interpretation', 'Date'
  );

  buildSection(sections, summary,
    'PainEnjoymentGeneralActivityAssessments', 'PainAssessments.PainEnjoymentGeneralActivityAssessments',
    'Name', 'Score', 'Interpretation', 'Questions', 'Date'
  );

  buildSection(sections, summary,
    'STarT Back Assessments', 'PainAssessments.STarTBackAssessments',
    'Name', 'Score', 'Interpretation', 'Date'
  );

  buildSection(sections, summary,
    'Opioid Medications', 'HistoricalTreatments.OpioidMedications',
    'Name', 'Type', 'Start', 'End'
  );

  buildSection(sections, summary,
    'Non-Opioid Medications', 'HistoricalTreatments.NonOpioidMedications',
    'Name', 'Type', 'Start', 'End'
  );

  buildSection(sections, summary,
    'Non-Pharmacologic Treatments', 'HistoricalTreatments.NonPharmacologicTreatments',
    'Name', 'Type', 'Date'
  );

  buildSection(sections, summary,
    'Pain Management Risk Screenings', 'RiskFactorsAndAssessments.PainManagementRiskScreenings',
    'Name', 'Score', 'Interpretation', 'Date'
  );

  buildSection(sections, summary,
    'Benzodiazepine Medications', 'RiskFactorsAndAssessments.BenzodiazepineMedications',
    'Name', 'Type', 'Start', 'End'
  );

  buildSection(sections, summary,
    'Naloxone Medications', 'RiskFactorsAndAssessments.NaloxoneMedications',
    'Name', 'Type', 'Start', 'End'
  );

  buildSection(sections, summary,
    'Urine Drug Screens', 'RiskFactorsAndAssessments.UrineDrugScreens',
    'Name', 'Score', 'Interpretation', 'Date'
  );

  buildSection(sections, summary,
    'MostRecentMME', 'RiskFactorsAndAssessments.MostRecentMME',
    'Name', 'Result', 'Date'
  );

  buildSection(sections, summary,
    'Stool Softeners and Laxatives', 'MiscellaneousItems.StoolSoftenersAndLaxatives',
    'Name', 'Type', 'Start', 'End'
  );

  displayErrors();

  const queryDiv = document.getElementById('queryDiv');
  for (let i=0; i < collector.length; i++) {
    const item = collector[i];
    const url = i == 0 ? item.config.url : item.config.url.slice(item.config.url.lastIndexOf('/') + 1);
    queryDiv.innerHTML += `<p><b>${url} (<a href="#" onclick="toggleShowHide('q${i}'); return false;">show/hide</a>)</b></p>\n`
    queryDiv.innerHTML += `<pre id='q${i}' style="display:none">${JSON.stringify(item.data, null, 2)}</pre>\n`;
  }

  const resultsDiv = document.getElementById('resultsDiv');
  resultsDiv.innerHTML += `<pre>${JSON.stringify(result, null, 2)}</pre>\n`;

  loadingDiv.style.display = 'none';
  document.getElementById('content').style.display = 'block';
});

function buildSection(sectionsDiv, summaryData, name, expression, ...properties) {
  let html = `<h3>${name}</h3>\n`;
  html += `<table id="${expression}" border="1" width="100%">\n`;
  html += `<tr>${properties.map(p => '<th>' + p + '</th>').join('')}</tr>\n`;
  let data = summaryData;
  for (let expPart of expression.split('.')) {
    data = data[expPart];
  }
  if (!Array.isArray(data)) {
    data = data != null ? [data] : [];
  }
  for (let row of data) {
    html += properties.map(p => `<td>${stringValue(row[p])}</td>\n`).join('');
  }
  html += `</table>\n\n`;
  sectionsDiv.innerHTML += html;
}

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

function displayErrors() {
  const errResponses = collector.filter(i => i.error);
  if (errResponses.length) {
    let html = `<h3>${errResponses.length} Errors</h3>\n`;
    html += `<table id="errors" border="1" width="100%">\n`;
    html += `<tr><th>Resource</th><th>Error</th></tr>\n`;
    for (let er of errResponses) {
      let msg = 'See query info below for details';
      if (er.error.responseJSON) {
        msg = er.error.responseJSON.ExceptionMessage || er.error.responseJSON.Message
      } else if (er.error.statusText) {
        msg = er.error.statusText
      }
      html += `<tr><td>${er.config.type}</td><td>${msg}</td></tr>\n`
    }
    html += `</table>\n\n`;
    document.getElementById(`errors`).innerHTML = html;
  }
}
