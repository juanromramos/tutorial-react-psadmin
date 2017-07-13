/*eslint-disable strict */

$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
//var BrowserRouter = require('react-router-dom').BrowserRouter;
var HashRouter = require('react-router-dom').HashRouter;
var App = require('./components/app');

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'))

// // Custom routing render function
// function render() {
//     var route = window.location.hash.substr(1); // Cogemos parámetro de la URL
//     ReactDOM.render(<App route={route} />, document.getElementById('app'));
// }
//
// window.addEventListener('hashchange', render);
// render();
