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
  expect(formatit['MMEFormat']({}, mockMME)).toEqual('20 MME/day');
});
