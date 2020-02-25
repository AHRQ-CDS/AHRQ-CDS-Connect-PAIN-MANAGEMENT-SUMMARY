import * as formatit from '../../helpers/formatit';

it('formats dates correctly', () => {
  const mockDateString = '2012-04-05T00:00:00.000+00:00';
  expect(formatit['dateFormat']({}, mockDateString)).toEqual('2012-Apr-05');
});

it('formats dates with ages correctly', () => {
  const mockDateString = '2012-04-05T00:00:00.000+00:00';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['dateAgeFormat'](mockResult, mockDateString)).toEqual('2012-Apr-05 (age 30)');
});

it('formats datetimes as datish values correctly', () => {
  const mockDateString = '2012-04-05T00:00:00.000+00:00';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockDateString)).toEqual('2012-Apr-05');
  expect(formatit['datishAgeFormat'](mockResult, mockDateString)).toEqual('2012-Apr-05 (age 30)');
});

it('formats dates as datish values correctly', () => {
  const mockDateString = '2012-04-05';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockDateString)).toEqual('2012-Apr-05');
  expect(formatit['datishAgeFormat'](mockResult, mockDateString)).toEqual('2012-Apr-05 (age 30)');
});

it('formats fully specified time periods as datish values correctly', () => {
  const mockPeriod = { 'Start': '2012-02-05', 'End': '2012-05-30' };
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockPeriod)).toEqual('2012-Feb-05 - 2012-May-30');
  expect(formatit['datishAgeFormat'](mockResult, mockPeriod)).toEqual('2012-Feb-05 (age 29) - 2012-May-30 (age 30)');
});

it('formats startless time periods as datish values correctly', () => {
  const mockPeriod = { 'Start': null, 'End': '2012-05-30' };
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockPeriod)).toEqual('unknown start - 2012-May-30');
  expect(formatit['datishAgeFormat'](mockResult, mockPeriod)).toEqual('unknown start - 2012-May-30 (age 30)');
});

it('formats endless time periods as datish values correctly', () => {
  const mockPeriod = { 'Start': '2012-02-05', 'End': null };
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockPeriod)).toEqual('2012-Feb-05 - ongoing');
  expect(formatit['datishAgeFormat'](mockResult, mockPeriod)).toEqual('2012-Feb-05 (age 29) - ongoing');
});

it('formats ages w/ no unit as datish values correctly', () => {
  const mockAgeString = '40';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockAgeString)).toEqual('age 40');
  expect(formatit['datishAgeFormat'](mockResult, mockAgeString)).toEqual('age 40');
});

it('formats ages w/ unit a as datish values correctly', () => {
  const mockAgeString = '40 a';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockAgeString)).toEqual('age 40');
  expect(formatit['datishAgeFormat'](mockResult, mockAgeString)).toEqual('age 40');
});

it('formats ages w/ unit mo as datish values correctly', () => {
  const mockAgeString = '40 mo';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockAgeString)).toEqual('age 40 months');
  expect(formatit['datishAgeFormat'](mockResult, mockAgeString)).toEqual('age 40 months');
});

it('formats ages w/ unit d as datish values correctly', () => {
  const mockAgeString = '40 d';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockAgeString)).toEqual('age 40 days');
  expect(formatit['datishAgeFormat'](mockResult, mockAgeString)).toEqual('age 40 days');
});

it('formats ages w/ unknown unit as datish values correctly', () => {
  const mockAgeString = '4 score';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockAgeString)).toEqual('age 4 score');
  expect(formatit['datishAgeFormat'](mockResult, mockAgeString)).toEqual('age 4 score');
});

it('formats age range w/ no units as datish values correctly', () => {
  const mockRange = { 'Low': '40', 'High': '50' };
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockRange)).toEqual('age 40 - 50');
  expect(formatit['datishAgeFormat'](mockResult, mockRange)).toEqual('age 40 - 50');
});

it('formats age range w/ units as datish values correctly', () => {
  const mockRange = { 'Low': '2 wk', 'High': '3 mo' };
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockRange)).toEqual('age 2 weeks - 3 months');
  expect(formatit['datishAgeFormat'](mockResult, mockRange)).toEqual('age 2 weeks - 3 months');
});

it('formats lowless age range as datish values correctly', () => {
  const mockRange = { 'Low': null, 'High': '50 yr' };
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockRange)).toEqual('age unknown - 50');
  expect(formatit['datishAgeFormat'](mockResult, mockRange)).toEqual('age unknown - 50');
});

it('formats lowless age range as datish values correctly', () => {
  const mockRange = { 'Low': '40 yr', 'High': null };
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockRange)).toEqual('age 40 - unknown');
  expect(formatit['datishAgeFormat'](mockResult, mockRange)).toEqual('age 40 - unknown');
});

it('formats true booleans as datish values correctly', () => {
  const mockBoolean = 'true';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockBoolean)).toEqual('true');
  expect(formatit['datishAgeFormat'](mockResult, mockBoolean)).toEqual('true');
});

it('formats false booleans as datish values correctly', () => {
  const mockBoolean = 'false';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockBoolean)).toEqual('false');
  expect(formatit['datishAgeFormat'](mockResult, mockBoolean)).toEqual('false');
});

it('formats arbitrary strings as datish values correctly', () => {
  const mockString = 'Spring 2012';
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockString)).toEqual('Spring 2012');
  expect(formatit['datishAgeFormat'](mockResult, mockString)).toEqual('Spring 2012');
});

it('formats null as datish values correctly', () => {
  const mockString = null;
  const mockResult = { 'Patient': { 'birthDate': { '_json': '1982-04-05T00:00:00.000+00:00' } } };
  expect(formatit['datishFormat'](mockResult, mockString)).toEqual('');
  expect(formatit['datishAgeFormat'](mockResult, mockString)).toEqual('');
});

it('flattens arrays correctly', () => {
  const mockArray = [
    { "Name": "Q1", "Score": "7" },
    { "Name": "Q2", "Score": "5" },
    { "Name": "Q3", "Score": "4" }
  ];

  const nameResult = formatit['arrayFlatten']({}, mockArray, 'Name');
  expect(nameResult.length).toEqual(3);
  expect(nameResult[0].props.children[0]).toEqual('Q1');
  expect(nameResult[1].props.children[0]).toEqual('Q2');
  expect(nameResult[2].props.children[0]).toEqual('Q3');

  const scoreResult = formatit['arrayFlatten']({}, mockArray, 'Score');
  expect(scoreResult.length).toEqual(3);
  expect(scoreResult[0].props.children[0]).toEqual('7');
  expect(scoreResult[1].props.children[0]).toEqual('5');
  expect(scoreResult[2].props.children[0]).toEqual('4');
});

it('formats MME results correctly', () => {
  const mockMME = '20 {MME}/d';
  expect(formatit['quantityFormat']({}, mockMME)).toEqual('20 MME/day');
});

it('formats quantity results correctly', () => {
  const mockResult = '130 mg/dL';
  expect(formatit['quantityFormat']({}, mockResult)).toEqual('130 mg/dL');
});

it('formats unitless quantity results correctly', () => {
  const mockResult = '95';
  expect(formatit['quantityFormat']({}, mockResult)).toEqual('95');
});

it('formats non-conforming quantity results correctly', () => {
  const mockResult = 'positive';
  expect(formatit['quantityFormat']({}, mockResult)).toEqual('positive');
});

it('formats codeableconcept results correctly',() =>  {
  const mockResult = {
    'medicationCodeableConcept': {
      'coding':[
        {
          'system':'http://hl7.org/fhir/sid/ndc',
          'code':'59011046020',
          'display':'OxyCONTIN 60 MG T12A'
        }
      ],
      'text':'OxyCONTIN 60 MG T12A'
    }
  };
  expect(formatit['codeableConceptFormat']({}, mockResult, 'medicationCodeableConcept', 'text'))
  .toEqual('OxyCONTIN 60 MG T12A');
  expect(formatit['codeableConceptFormat']({}, mockResult, 'medicationCodeableConcept', 'coding', 'code'))
  .toEqual('59011046020');
  expect(formatit['codeableConceptFormat']({}, mockResult, 'medicationCodeableConcept', 'coding', 'display'))
  .toEqual('OxyCONTIN 60 MG T12A');
  expect(formatit['codeableConceptFormat']({}, mockResult, 'medicationCodeableConcept', 'coding', 'system'))
  .toEqual('http://hl7.org/fhir/sid/ndc');
});

it('formats substitution text correctly', () => {
  const mockResult = {'resourceType':'medicationOrder'};
  expect(formatit['stringSubstitutionFormat']({}, mockResult, 'Order')).toEqual('Order');
});
