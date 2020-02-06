import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './utils/fontawesomeLibrary';

import Root from './containers/Root';

// The line below was in the ejected PMSA, but now React throws an error on it.
// That said, it doesn't *seem* to affect output.  Leaving it in (commented) just in case...
//import '../node_modules/font-awesome/css/font-awesome.css';
import './styles/App.css';

render(
  <Router basename={process.env.PUBLIC_URL}>
    <Root />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
