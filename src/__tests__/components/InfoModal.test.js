import { shallowRender } from '../../utils/testHelpers';
import InfoModal from '../../components/InfoModal';
import { mockSubSection } from '../../utils/testFixtures';

const component = shallowRender(InfoModal, {
  subSection: mockSubSection,
  closeModal: () => {}
});

it('renders without crashing', () => {
  expect(component).toExist();
});
