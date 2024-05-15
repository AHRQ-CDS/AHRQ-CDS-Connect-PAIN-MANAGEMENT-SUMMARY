import { render, screen } from '../../utils/testHelpers';
import { mockSummaryA } from '../../utils/testFixtures';
import Header from '../../components/Header';

describe('Header', () => {
  let result;

  beforeEach(() => {
    result = render(Header, {
      patientName: mockSummaryA.Patient.Name,
      patientAge: mockSummaryA.Patient.Age,
      patientGender: mockSummaryA.Patient.Gender,
      totalEntries: 21,
      numFlaggedEntries: 0,
      meetsInclusionCriteria: true
    });
  });

  it('renders without crashing', () => {
    expect(screen.getByText('CDS Connect')).toBeInTheDocument();
  });

  it('renders the patient name, age, and gender', () => {
    const { container } = result;
    expect(screen.getByRole('heading')).toHaveTextContent(
      mockSummaryA.Patient.Name
    );
    expect(container.querySelector('.patient-age')).toHaveTextContent(
      `${mockSummaryA.Patient.Age} YRS`
    );
    expect(container.querySelector('.patient-gender')).toHaveTextContent(
      mockSummaryA.Patient.Gender
    );
  });

  it('renders the total number of entries', () => {
    const { container } = result;
    expect(container.querySelector('.total')).toHaveTextContent('21');
  });
});
