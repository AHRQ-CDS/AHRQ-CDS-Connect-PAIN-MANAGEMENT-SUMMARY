import React from 'react';
import moment from 'moment';

const dateRE = /^\d{4}-\d{2}-\d{2}(T|\b)/; // loosely matches '2012-04-05' or '2012-04-05T00:00:00.000+00:00'
const quantityRE = /^(\d+(\.\d+)?)(\s+(\S+))?$/; // matches '40' or '40 a' (a is UCUM unit for years)
const booleanRE = /^(true|false)$/; // matches 'true' or 'false'

export function dateFormat(result, input) {
  if (input == null) return '';
  return moment.parseZone(input).format('YYYY-MMM-DD');
}

export function dateAgeFormat(result, input) {
  if (result == null || result.Patient == null || input == null) return '';
  const patientDOB = result.Patient.birthDate._json;
  const patientAgeAtDate = moment(input).diff(patientDOB, 'years');
  return `${dateFormat(result, input)} (age ${patientAgeAtDate})`;
}

export function datishFormat(result, input) {
  return _datishAgeFormat(result, input, false);
}

export function datishAgeFormat(result, input) {
  return _datishAgeFormat(result, input, true);
}

export function ageFormat(result, input) {
  if (input == null) return '';
  const m = quantityRE.exec(input);
  if (m) {
    const num = m[1];
    if (m.length === 5 && m[4] != null) { // it has a unit
      switch (m[4]) {
        case 'a': case 'y': case 'yr': case 'yrs': case 'year': case 'years':
          return `age ${num}`; // no unit, years is implied
        case 'mo': case 'mos': case 'month': case 'months':
          return `age ${num} months`;
        case 'wk': case 'wks': case 'week': case 'weeks':
          return `age ${num} weeks`;
        case 'd': case 'day': case 'days':
          return `age ${num} days`;
        default:
          return `age ${input}`;
      }
    }
  }
  // fall back to returning the age + string
  return `age ${input}`;
}

export function booleanFormat(result, input) {
  if (input == null) return '';
  return `${input}`;
}

export function arrayFlatten(result, input, property, propertyAria, showAria) {
  if (input == null) return '';
  return input.map((question, i) => {
    let ariaLabel = '';
    if (showAria) ariaLabel = `${question[property]} - Question Score: ${question[propertyAria]}`;
    return <span key={i} aria-hidden={!showAria} aria-label={ariaLabel}>{question[property]}<br /></span>;
  });
}

export function quantityFormat(result, input) {
  if (input == null) return '';
  const m = quantityRE.exec(input);
  if (m) {
    const num = m[1];
    if (m.length === 5 && m[4] != null) { // it has a unit
      // re-name MME/day unit
      const unit = m[4] === '{MME}/d' ? 'MME/day' : m[4];
      return `${num} ${unit}`;
    }
    return `${num}`;
  }
  // fall back to returning string
  return input;
}
/*
 * TODO expand this to replace part of the text based on a provided matching criteria */
export function stringSubstitutionFormat(result, input, replacement) {
  if (input == null) return '';
  if (replacement == null) return '';
  return replacement;
}

/*
 * string formatter for FHIR codeableConcept element
 *  i.e.: {
      "coding" : [{ Coding }], // Code defined by a terminology system
      "text" : "<string>" // Plain text representation of the concept
    }
    @parameters
    result: Summary json object
    input: codeableconcept json object from Summary
    key: name of the concept to match
    field: field in concept to match
    codingField: field in coding to match
 */
export function codeableConceptFormat(result, input, key, field, codingField) {
  if (!input) {
    return '';
  }
  if (typeof input === 'object' &&
      input.hasOwnProperty(key) &&
      input[key].hasOwnProperty(field)) {
      if (field === 'text') {
        return input[key][field];
      }
      if (field === 'coding') {
        let matchedItem = (input[key][field]).find(item => item.hasOwnProperty(codingField));
        if (matchedItem) {
          return matchedItem[codingField];
        }
        return '';
      }
      return '';
  }
  return '';
}

function _datishAgeFormat(result, input, showAge) {
  const df = showAge ? dateAgeFormat : dateFormat;
  if (input == null) {
    return '';
  } else if (typeof input === 'string') {
    // Test if it looks like a date format
    if (dateRE.test(input)) {
      return df(result, input);
    } else if (quantityRE.test(input)) {
      return ageFormat(result, input);
    } else if (booleanRE.test(input)) {
      return booleanFormat(result, input);
    }
    // fall back to the string itself
    return input;
  } else if (input.Start || input.End) {
    const start = input.Start ? df(result, input.Start) : 'unknown start';
    const end = input.End ? df(result, input.End) : 'ongoing';
    return `${start} - ${end}`;
  } else if (input.Low || input.High) {
    const low = input.Low ? ageFormat(result, input.Low) : 'age unknown';
    const high = input.High ? ageFormat(result, input.High) : 'age unknown';
    return `${low} - ${high.slice(4)}`; // slice removes 'age ' prefix
  }
  // fall back to the input string
  return input;
}

