import { shallowRender } from '../../utils/testHelpers';
import Landing from '../../components/Landing';

const component = shallowRender(Landing, {});

it('renders without crashing', () => {
  expect(component).toExist();
});
