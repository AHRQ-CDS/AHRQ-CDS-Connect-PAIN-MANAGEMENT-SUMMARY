import { render, userEvent, screen } from '../../utils/testHelpers';
import ExclusionBanner from '../../components/ExclusionBanner';

describe('ExclusionBanner', () => {
  let result;

  beforeEach(() => {
    result = render(ExclusionBanner, {
      url: 'testUrl',
      query: {}
    });
  });

  it('renders without crashing', () => {
    expect(screen.getByText('TAKE NOTICE:')).toBeInTheDocument();
  });

  it('closes the banner when the button is clicked', async () => {
    const { container } = result;
    expect(container.querySelector('.exclusion-banner')).toHaveStyle(
      'display: block'
    );
    await userEvent.click(container.querySelector('.close-button'));
    expect(container.querySelector('.exclusion-banner')).toHaveStyle(
      'display: none'
    );
  });
});
