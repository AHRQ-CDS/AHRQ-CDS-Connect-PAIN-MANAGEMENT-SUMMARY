import { render, userEvent, screen } from '../../utils/testHelpers';
import InclusionBanner from '../../components/InclusionBanner';

describe('InclusionBanner', () => {
  let result;

  beforeEach(() => {
    result = render(InclusionBanner, {
      url: 'testUrl',
      query: {},
      dismissible: true
    });
  });

  it('renders without crashing', () => {
    expect(screen.getByText('WARNING:')).toBeInTheDocument();
  });

  it('closes the banner when the button is clicked', async () => {
    const { container } = result;
    expect(container.querySelector('.inclusion-banner')).toHaveStyle(
      'display: block'
    );
    await userEvent.click(container.querySelector('.close-button'));
    expect(container.querySelector('.inclusion-banner')).toHaveStyle(
      'display: none'
    );
  });
});
