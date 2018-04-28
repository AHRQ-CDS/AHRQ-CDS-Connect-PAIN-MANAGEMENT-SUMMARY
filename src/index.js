import demoElm from './cql/Demo.json';
import fhirhelpersElm from './cql/FHIRHelpers.json';
import executeElm from './executeELM';

const elmDependencies = {
  FHIRHelpers: fhirhelpersElm
};

const collector = [];

executeElm(demoElm, elmDependencies, collector, (result, error) => {
  const loadingDiv = document.getElementById('loading');
  if (error) {
    loadingDiv.innerHTML = 'Error: See console for details.<br/>', error.toString();
    console.error(error);
    return;
  }

  document.getElementById('name').innerHTML = result.Name;
  document.getElementById('age').innerHTML = result.Age + ' years';
  document.getElementById('gender').innerHTML = result.Gender;

  const conditionTable = document.getElementById('conditionTable');
  for (const c of result.Conditions) {
    conditionTable.innerHTML += `<tr>${cell(c.Name) + cell(c.Status) + cell(c.Onset) + cell(c.Abatement)}</tr>`;
  }
  displayErrors('Condition');

  const encounterTable = document.getElementById('encounterTable');
  for (const e of result.Encounters) {
    encounterTable.innerHTML += `<tr>${cell(e.Name) + cell(e.Visit) + cell(e.Reasons)}</tr>`;
  }
  displayErrors('Encounter');

  const medicationTable = document.getElementById('medicationTable');
  for (const m of result.Medications) {
    medicationTable.innerHTML += `<tr>${cell(m.Name) + cell(m.Type) + cell(m.Start) + cell(m.End) + cell(m.MedType)}</tr>`;
  }
  displayErrors('MedicationOrder');
  displayErrors('MedicationStatement');

  const observationTable = document.getElementById('observationTable');
  for (const o of result.Observations) {
    observationTable.innerHTML += `<tr>${cell(o.Name) + cell(o.Value) + cell(o.Interpretation) + cell(o.Date)}</tr>`;
  }
  displayErrors('Observation');

  const procedureTable = document.getElementById('procedureTable');
  for (const o of result.Procedures) {
    procedureTable.innerHTML += `<tr>${cell(o.Name) + cell(o.Date)}</tr>`;
  }
  displayErrors('Procedure');

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

function displayErrors(type) {
  let errResponses = collector.filter(i => i.error && i.config.type === type);
  if (errResponses.length) {
    for (let er of errResponses) {
      let msg = 'See query info below for details';
      if (er.error.responseJSON) {
        msg = er.error.responseJSON.ExceptionMessage || er.error.responseJSON.Message
      } else if (er.error.statusText) {
        msg = er.error.statusText
      }
      document.getElementById(`${type}Errors`).innerHTML += `Error Querying ${type}: ${msg}</br>`;
    }
  }
}

function cell(value) {
  if (value && (value.Start || value.End)) {
    value = `${value.Start || '(no start)'} - ${value.End || '(no end)'}`
  }
  return `<td>${value != null ? value : ''}</td>`
}
