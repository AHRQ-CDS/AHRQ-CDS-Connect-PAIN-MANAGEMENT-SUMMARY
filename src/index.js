import 'react-app-polyfill/stable';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './utils/fontawesomeLibrary';

import Root from './containers/Root';

import './styles/App.scss';

render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
