const fs = require('fs');
const path = require('path');

update(path.join(__dirname, 'dstu2_test_patients'));
update(path.join(__dirname, 'r4_test_patients'));

function update(patientPath) {
  for (const fileName of fs.readdirSync(patientPath)) {
    const file = path.join(patientPath, fileName);
    if (!file.endsWith('.json')) {
      console.log('Skipping non-JSON file:', file);
      continue;
    }

    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (json.resourceType !== 'Bundle') {
      console.error('Test patients must be a valid FHIR Bundle.  Not a Bundle:', file);
      continue;
    }

    console.log('Updating ', file);

    const referenceDate = new Date(json.meta.lastUpdated);
    const now = new Date();

    // Iterate the entries and update relevant dates based on the resource type
    // NOTE: This only supports dates known to be used in this test data!
    // If you update the data with new information, this may need to be updated
    // as well if the new data introduces date fields that were not previously used.
    for (const entry of json.entry) {
      switch (entry.resource.resourceType) {
        case 'Condition':
          adjustDate(entry.resource, 'onsetDateTime', referenceDate, now);
          adjustDate(entry.resource, 'recordedDate', referenceDate, now); // R4
          adjustDate(entry.resource, 'dateRecorded', referenceDate, now); // DSTU2
          break;
        case 'Encounter':
          adjustDate(entry.resource, 'period', referenceDate, now);
          break;
        case 'MedicationRequest':
          adjustDate(entry.resource, 'authoredOn', referenceDate, now);
          break;
        case 'MedicationOrder':
          adjustDate(entry.resource, 'dateWritten', referenceDate, now);
          adjustDate(entry.resource, 'dateEnded', referenceDate, now);
          break;
        case 'MedicationStatement':
          adjustDate(entry.resource, 'effectiveDateTime', referenceDate, now);
          break;
        case 'Observation':
          adjustDate(entry.resource, 'issued', referenceDate, now);
          break;
        case 'Patient':
          adjustDate(entry.resource, 'birthDate', referenceDate, now);
          break;
        case 'Procedure':
          adjustDate(entry.resource, 'performedDateTime', referenceDate, now);
          break;
        default:
          // do nothing
      }
    }

    json.meta.lastUpdated = now.toISOString();
    fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf-8');
  }
}

function adjustDate(object, field, referenceDate, now) {
  const oldValue = object[field];
  if (oldValue == null) {
    return;
  } else if (typeof oldValue !== 'string') {
    if (oldValue.start != null || oldValue.end != null) {
      // it's a period
      adjustDate(oldValue, 'start', referenceDate, now);
      adjustDate(oldValue, 'end', referenceDate, now);
    }
  } else {
    const date = new Date(oldValue);
    const sinceReference = referenceDate - date;
    const adjusted = new Date(now - sinceReference);
    object[field] = adjusted.toISOString().slice(0, oldValue.length);
  }
}

