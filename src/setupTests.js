import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import './utils/fontawesomeLibrary';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
