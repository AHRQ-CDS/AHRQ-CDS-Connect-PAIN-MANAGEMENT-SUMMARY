import React from 'react';
import moment from 'moment';

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
}

export function arrayFlatten(result, input, property) {
  if (input == null) return '';
  return input.map((question, i) => {
    const toReturn = (<span key={i}>{question[property]}<br /></span>);
    return toReturn;
  });
}

export function MMEFormat(result, input) {
  if (input == null) return '';
  return `${input.match(/\d+/)} MME/day`;
}
