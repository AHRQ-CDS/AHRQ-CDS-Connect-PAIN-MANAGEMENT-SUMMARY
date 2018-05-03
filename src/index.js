import '@babel/polyfill';
import 'fhirclient';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './containers/Root';
import registerServiceWorker from './utils/registerServiceWorker';

import './styles/App.css';
import './styles/index.css';

render(
  <Router basename={process.env.PUBLIC_URL}>
    <Root />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
