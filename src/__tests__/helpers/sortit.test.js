import * as sortit from '../../helpers/sortit';
import * as formatit from '../../helpers/formatit';

const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };

it('sorts strings correctly', () => {
  const a = 'Foo';
  const b = 'baz';
  const c = 'Bar';
  expect([a, b, c].sort(sortit.dateCompare)).toEqual([c, b, a]);
});

it('sorts strings w/ nulls correctly', () => {
  const a = 'Foo';
  const b = 'baz';
  const c = null;
  expect([a, b, c].sort(sortit.dateCompare)).toEqual([b, a, c]);
});

it('sorts strings as datish formats correctly', () => {
  const a = formatit.datishFormat(mockResult, 'Foo');
  const b = formatit.datishFormat(mockResult, 'baz');
  const c = formatit.datishFormat(mockResult, 'Bar');
  expect([a, b, c].sort(sortit.datishCompare)).toEqual([c, b, a]);
});

it('sorts dates correctly', () => {
  const a = formatit.dateFormat(mockResult, '2012-04-05T00:00:00.000+00:00');
  const b = formatit.dateFormat(mockResult, '2012-01-12T00:00:00.000+00:00');
  const c = formatit.dateFormat(mockResult, '2012-03-06T00:00:00.000+00:00');
  expect([a, b, c].sort(sortit.dateCompare)).toEqual([b, c, a]);
});

it('sorts dates w/ nulls correctly', () => {
  const a = formatit.dateFormat(mockResult, '2012-04-05T00:00:00.000+00:00');
  const b = null;
  const c = formatit.dateFormat(mockResult, '2012-03-06T00:00:00.000+00:00');
  expect([a, b, c].sort(sortit.dateCompare)).toEqual([c, a, b]);
});

it('sorts dates as datish formats correctly', () => {
  const a = formatit.datishFormat(mockResult, '2012-04-05T00:00:00.000+00:00');
  const b = formatit.datishFormat(mockResult, '2012-01-12T00:00:00.000+00:00');
  const c = formatit.datishFormat(mockResult, '2012-03-06T00:00:00.000+00:00');
  expect([a, b, c].sort(sortit.datishCompare)).toEqual([b, c, a]);
});

it('sorts dates w/ ages correctly', () => {
  const a = formatit.dateAgeFormat(mockResult, '2012-04-05T00:00:00.000+00:00');
  const b = formatit.dateAgeFormat(mockResult, '2012-01-12T00:00:00.000+00:00');
  const c = formatit.dateAgeFormat(mockResult, '2012-03-06T00:00:00.000+00:00');
  expect([a, b, c].sort(sortit.dateCompare)).toEqual([b, c, a]);
});

it('sorts dates w/ ages and nulls correctly', () => {
  const a = formatit.dateAgeFormat(mockResult, '2012-04-05T00:00:00.000+00:00');
  const b = null;
  const c = formatit.dateAgeFormat(mockResult, '2012-03-06T00:00:00.000+00:00');
  expect([a, b, c].sort(sortit.dateCompare)).toEqual([c, a, b]);
});

it('sorts dates w/ ages as datish formats correctly', () => {
  const a = formatit.datishAgeFormat(mockResult, '2012-04-05T00:00:00.000+00:00');
  const b = formatit.datishAgeFormat(mockResult, '2012-01-12T00:00:00.000+00:00');
  const c = formatit.datishAgeFormat(mockResult, '2012-03-06T00:00:00.000+00:00');
  expect([a, b, c].sort(sortit.datishCompare)).toEqual([b, c, a]);
});

it('sorts ages correctly', () => {
  const a = formatit.ageFormat(mockResult, '12 years');
  const b = formatit.ageFormat(mockResult, '5 years');
  const c = formatit.ageFormat(mockResult, '15 years');
  expect([a, b, c].sort(sortit.ageCompare)).toEqual([b, a, c]);
});

it('sorts ages w/ mixed units correctly', () => {
  const a = formatit.ageFormat(mockResult, '10 years');
  const b = formatit.ageFormat(mockResult, '10 months');
  const c = formatit.ageFormat(mockResult, '10 days');
  const d = formatit.ageFormat(mockResult, '9');
  const e = formatit.ageFormat(mockResult, '10 weeks');
  expect([a, b, c, d, e].sort(sortit.ageCompare)).toEqual([c, e, b, d, a]);
});

it('sorts ages w /nulls correctly', () => {
  const a = formatit.ageFormat(mockResult, null);
  const b = formatit.ageFormat(mockResult, '5 years');
  const c = formatit.ageFormat(mockResult, '15 years');
  expect([a, b, c].sort(sortit.ageCompare)).toEqual([b, c, a]);
});

it('sorts ages as datish formats correctly', () => {
  const a = formatit.datishFormat(mockResult, '10 years');
  const b = formatit.datishFormat(mockResult, '10 months');
  const c = formatit.datishFormat(mockResult, '10 days');
  const d = formatit.datishFormat(mockResult, '9');
  const e = formatit.datishFormat(mockResult, '10 weeks');
  expect([a, b, c, d, e].sort(sortit.datishCompare)).toEqual([c, e, b, d, a]);
});

it('sorts periods as datish formats correctly', () => {
  const a = formatit.datishFormat(mockResult, { 'Start': '2012-02-05', 'End': '2012-04-05' });
  const b = formatit.datishFormat(mockResult, { 'Start': '2013-01-05', 'End': '2014-02-05' });
  const c = formatit.datishFormat(mockResult, { 'Start': '2012-03-05', 'End': '2012-04-05' });
  expect([a, b, c].sort(sortit.datishCompare)).toEqual([a, c, b]);
});

it('sorts periods w/ nulls as datish formats correctly', () => {
  const a = null;
  const b = formatit.datishFormat(mockResult, { 'Start': '2013-01-05', 'End': '2014-02-05' });
  const c = formatit.datishFormat(mockResult, { 'Start': '2012-03-05', 'End': '2012-04-05' });
  const d = formatit.datishFormat(mockResult, { 'Start': null, 'End': '2015-04-05' });
  expect([a, b, c, d].sort(sortit.datishCompare)).toEqual([c, b, d, a]);
});

it('sorts age ranges as datish formats correctly', () => {
  const a = formatit.datishFormat(mockResult, { 'Low': '18 months', 'High': '3 years' });
  const b = formatit.datishFormat(mockResult, { 'Low': '2 wk', 'High': '3 mo' });
  const c = formatit.datishFormat(mockResult, { 'Low': '1 d', 'High': '7d' });
  expect([a, b, c].sort(sortit.datishCompare)).toEqual([c, b, a]);
});

it('sorts age ranges w/ nulls as datish formats correctly', () => {
  const a = formatit.datishFormat(mockResult, { 'Low': '18 months', 'High': '3 years' });
  const b = formatit.datishFormat(mockResult, { 'Low': null, 'High': '3 mo' });
  const c = formatit.datishFormat(mockResult, { 'Low': '1 d', 'High': '7d' });
  const d = null;
  expect([a, b, c, d].sort(sortit.datishCompare)).toEqual([c, a, b, d]);
});

it('sorts mixed formats as datish formats correctly', () => {
  const a = formatit.datishFormat(mockResult, { 'Low': '18 months', 'High': '3 years' });
  const b = formatit.datishFormat(mockResult, { 'Low': null, 'High': '3 mo' });
  const c = formatit.datishFormat(mockResult, '10 years');
  const d = formatit.datishFormat(mockResult, '10 months');
  const e = null;
  const f = formatit.datishFormat(mockResult, '2012-04-05T00:00:00.000+00:00');
  const g = formatit.datishFormat(mockResult, '2012-01-12T00:00:00.000+00:00');
  const h = formatit.datishFormat(mockResult, 'sometime in the fall');
  const i = formatit.datishFormat(mockResult, 'a while ago');
  const j = formatit.datishFormat(mockResult, { 'Start': '2013-01-05', 'End': '2014-02-05' });
  const k = formatit.datishFormat(mockResult, { 'Start': null, 'End': '2012-04-05' });
  const l = formatit.datishAgeFormat(mockResult, '2015-04-05T00:00:00.000+00:00');
  const m = formatit.datishAgeFormat(mockResult, '2010-01-12T00:00:00.000+00:00');

  expect([a, b, c, d, e, f, g, h, i, j, k, l, m].sort(sortit.datishCompare))
    .toEqual([m, g, f, j, l, d, a, c, i, b, h, k, e]);
});

it('sorts quantities correctly', () => {
  const a = '100 cm';
  const b = '10 mg/dL';
  const c = '10 cm';
  const d = '9.5 mg/dL';
  const e = '3';
  const f = '10 g';
  expect([a, b, c, d, e, f].sort(sortit.quantityCompare)).toEqual([e, c, a, f, d, b]);
});

it('sorts quantities w/ nulls correctly', () => {
  const a = '100 cm';
  const b = '10 mg/dL';
  const c = '10 cm';
  const d = '9.5 mg/dL';
  const e = null;
  const f = '10 g';
  expect([a, b, c, d, e, f].sort(sortit.quantityCompare)).toEqual([c, a, f, d, b, e]);
});