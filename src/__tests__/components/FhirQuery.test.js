import { shallowRender } from '../../utils/testHelpers';
import FhirQuery from '../../components/FhirQuery';

const component = shallowRender(FhirQuery, {
  url: 'testUrl',
  data: {}
});

it('renders without crashing', () => {
  expect(component).toExist();
});
