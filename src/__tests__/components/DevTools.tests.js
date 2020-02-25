import { shallowRender } from '../../utils/testHelpers';
import DevTools from '../../components/DevTools';

const component = shallowRender(DevTools, {
  collector: [],
  result: {},
  summary: {}
});

it('renders without crashing', () => {
  expect(component).toExist();
});
