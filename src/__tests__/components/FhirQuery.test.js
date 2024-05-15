import { render, screen } from '../../utils/testHelpers';
import FhirQuery from '../../components/FhirQuery';

describe('FhirQuery', () => {
  it('renders without crashing', () => {
    const { container } = render(FhirQuery, {
      url: 'testUrl',
      data: {}
    });
    expect(container.querySelector('.fhir-query')).toBeInTheDocument();
    expect(screen.getByText('testUrl')).toBeInTheDocument();
  });
});
