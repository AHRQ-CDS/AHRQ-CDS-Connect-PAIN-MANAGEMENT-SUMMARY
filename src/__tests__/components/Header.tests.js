import { shallowRender } from '../../utils/testHelpers';
import { mockSummaryA } from '../../utils/testFixtures';
import Header from '../../components/Header';

const component = shallowRender(Header, {
  patientName: mockSummaryA.Patient.Name,
 // patientAge: mockSummaryA.Patient.Age,
  patientGender: mockSummaryA.Patient.Gender,
  patientDOB: '1950-01-05',
  totalEntries: 21,
  numFlaggedEntries: 0,
  meetsInclusionCriteria: true
});

it('renders without crashing', () => {
  expect(component).toExist();
});

it('renders the patient name, age, dob, and gender', () => {
  expect(component.find('.patient-name')).toHaveText(mockSummaryA.Patient.Name);
  /*
   * note currently not displaying age anymore
   */
 // expect(component.find('.patient-age')).toHaveText(`${mockSummaryA.Patient.Age} YRS`);
  expect(component.find('.patient-gender')).toHaveText(mockSummaryA.Patient.Gender);
  expect(component.find('.patient-dob')).toHaveText('DOB: 1950-01-05');
});

//skip this test as total entries aren't being displayed anymore
// it('renders the total number of entries', () => {
//   expect(component.find('.total')).toHaveText('21');
// });
