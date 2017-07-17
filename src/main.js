/*eslint-disable strict */

$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var BrowserRouter = require('react-router-dom').BrowserRouter;
//var HashRouter = require('react-router-dom').HashRouter;
var InitializeActions = require('./actions/initializeActions');
var App = require('./components/app');

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))

InitializeActions.initApp();

// // Custom routing render function
// function render() {
//     var route = window.location.hash.substr(1); // Cogemos parámetro de la URL
//     ReactDOM.render(<App route={route} />, document.getElementById('app'));
// }
//
// window.addEventListener('hashchange', render);
// render();
