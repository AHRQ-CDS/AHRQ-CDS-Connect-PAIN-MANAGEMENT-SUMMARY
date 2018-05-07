import { shallowRender } from '../../utils/testHelpers';
import summaryMock from '../../utils/testFixtures';
import Header from '../../components/Header';

const component = shallowRender(Header, {
  patientName: summaryMock.Patient.Name,
  patientAge: summaryMock.Patient.Age,
  patientGender: summaryMock.Patient.Gender,
  totalEntries: 21,
  numFlaggedEntries: 0
});

it('renders without crashing', () => {
  expect(component).toExist();
});

it('renders the patient name, age, and gender', () => {
  expect(component.find('.patient-name')).toHaveText(summaryMock.Patient.Name);
  expect(component.find('.patient-age')).toHaveText(`${summaryMock.Patient.Age} YRS`);
  expect(component.find('.patient-gender')).toHaveText(summaryMock.Patient.Gender);
});

it('renders the total number of entries', () => {
  expect(component.find('.total')).toHaveText('21');
});
