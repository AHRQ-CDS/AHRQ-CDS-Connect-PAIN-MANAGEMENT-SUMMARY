import '@babel/polyfill';
import 'fhirclient';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './utils/fontawesomeLibrary';

import Root from './containers/Root';
// Disabling the service-worker, as it has limited value in this environment
// See: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app
// import registerServiceWorker from './utils/registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.css';
import './styles/App.css';

render(
  <Router basename={process.env.PUBLIC_URL}>
    <Root />
  </Router>,
  document.getElementById('root')
);
// registerServiceWorker();
