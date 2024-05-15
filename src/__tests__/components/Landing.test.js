import { render, screen } from '../../utils/testHelpers';
import Landing from '../../components/Landing';

describe('Landing', () => {
  beforeAll(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve({ json: vi.fn(() => Promise.resolve({})) }))
    );
    vi.mock('fhirclient', () => {
      return {
        default: {
          oauth2: {
            ready: vi.fn(() =>
              Promise.resolve({
                getFhirRelease: vi.fn(() => 4),
                patient: {
                  read: vi.fn(() =>
                    Promise.resolve({ resourceType: 'Patient', id: '123' })
                  ),
                  request: vi.fn(() =>
                    Promise.resolve({
                      entry: [
                        { resource: { resourceType: 'Patient', id: '123' } }
                      ]
                    })
                  )
                }
              })
            )
          }
        }
      };
    });
  });

  it('renders without crashing', () => {
    render(Landing, {});
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });
});
