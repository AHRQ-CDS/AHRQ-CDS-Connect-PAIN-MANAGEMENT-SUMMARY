import { render, screen } from '../../utils/testHelpers';
import { mockSummaryA, mockSectionFlags } from '../../utils/testFixtures';
import Summary from '../../components/Summary';

describe('Summary', () => {
  let result;

  beforeEach(() => {
    result = render(Summary, {
      summary: mockSummaryA,
      sectionFlags: mockSectionFlags,
      collector: [],
      result: {},
      numMedicalHistoryEntries: 2,
      numPainEntries: 4,
      numTreatmentsEntries: 1,
      numRiskEntries: 2
    });
  });

  it('renders without crashing', () => {
    expect(
      screen.getByText('Factors to Consider in Managing Chronic Pain')
    ).toBeInTheDocument();
  });

  it('renders the scrolling nav', () => {
    const { container } = result;
    expect(container.querySelector('.summary__nav')).toBeInTheDocument();
  });

  it('renders the summary display', () => {
    const { container } = result;
    expect(container.querySelector('.summary__display')).toBeInTheDocument();
  });

  it('renders all subsection headers', () => {
    const { container } = result;
    expect(container.querySelectorAll('.sub-section__header')).toHaveLength(15);
  });
});
