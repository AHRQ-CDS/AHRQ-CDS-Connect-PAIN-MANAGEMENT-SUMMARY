import 'react-app-polyfill/stable';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './utils/fontawesomeLibrary';

import Root from './containers/Root';

import './styles/App.scss';

render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
);
