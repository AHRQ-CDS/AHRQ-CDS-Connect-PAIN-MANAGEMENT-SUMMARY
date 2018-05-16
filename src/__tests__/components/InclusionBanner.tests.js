import { shallowRender } from '../../utils/testHelpers';
import InclusionBanner from '../../components/InclusionBanner';

const component = shallowRender(InclusionBanner, {
  url: 'testUrl',
  query: {},
  dismissible: true
});

it('renders without crashing', () => {
  expect(component).toExist();
});

it('closes the banner when the button is clicked', () => {
  expect(component.find('.inclusion-banner')).toHaveStyle('display', 'block');
  component.find('.close-button').simulate('click');
  expect(component.find('.inclusion-banner')).toHaveStyle('display', 'none');
});
