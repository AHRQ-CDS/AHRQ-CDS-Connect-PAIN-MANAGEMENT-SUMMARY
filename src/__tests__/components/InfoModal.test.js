import { render, screen } from '../../utils/testHelpers';
import InfoModal from '../../components/InfoModal';
import { mockSubSection } from '../../utils/testFixtures';

describe('InfoModal', () => {
  it('renders without crashing', () => {
    render(InfoModal, {
      subSection: mockSubSection,
      closeModal: () => {}
    });
    expect(
      screen.getByText(
        'More Information for Pain Enjoyment General Activity (PEG) Assessments'
      )
    ).toBeInTheDocument();
  });
});
