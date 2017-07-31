import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'toastr/build/toastr.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import InitializeActions from './actions/initializeActions';
import App from './components/app';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))

InitializeActions.initApp();
