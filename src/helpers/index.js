import React from 'react';
import moment from 'moment';

export function dateFormat(input) {
  return input == null ? '' : moment(input).format('YYYY-MMM-DD');
}

export function arrayFlatten(input, property) {
  return input.map((question, i) => {
    return (<span key={i}>{question[property]}<br /></span>);
  });
}

export function MMEFormat(input) {
  return `${input.match(/\d+/)} MME/day`;
}
