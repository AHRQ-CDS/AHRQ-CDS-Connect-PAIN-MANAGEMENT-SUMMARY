import { shallowRender } from '../../utils/testHelpers';
import { mockSummaryA } from '../../utils/testFixtures';
import Header from '../../components/Header';

const component = shallowRender(Header, {
  patientName: mockSummaryA.Patient.Name,
  patientAge: mockSummaryA.Patient.Age,
  patientGender: mockSummaryA.Patient.Gender,
  totalEntries: 21,
  numFlaggedEntries: 0
});

it('renders without crashing', () => {
  expect(component).toExist();
});

it('renders the patient name, age, and gender', () => {
  expect(component.find('.patient-name')).toHaveText(mockSummaryA.Patient.Name);
  expect(component.find('.patient-age')).toHaveText(`${mockSummaryA.Patient.Age} YRS`);
  expect(component.find('.patient-gender')).toHaveText(mockSummaryA.Patient.Gender);
});

it('renders the total number of entries', () => {
  expect(component.find('.total')).toHaveText('21');
});
