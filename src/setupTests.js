import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import localStorage from 'mock-local-storage'; // eslint-disable-line no-unused-vars
import 'jest-enzyme';

// configure enzyme adapter
configure({ adapter: new Adapter() });

// mock local storage
global.window = {};
// see: https://github.com/letsrock-today/mock-local-storage/issues/17
Object.defineProperty(window, 'localStorage', {
  value: global.localStorage,
  configurable:true,
  enumerable:true,
  writable:true
});
