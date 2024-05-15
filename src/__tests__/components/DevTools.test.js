import { render, screen } from '../../utils/testHelpers';
import DevTools from '../../components/DevTools';

describe('DevTools', () => {
  it('renders without crashing', () => {
    render(DevTools, {
      collector: [],
      result: {}
    });
    expect(screen.getByText('Development Tools')).toBeInTheDocument();
  });
});
