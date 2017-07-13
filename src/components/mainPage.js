"use strict";

var React = require('react');
var Switch = require('react-router-dom').Switch;
var Route = require('react-router-dom').Route;
var NotFoundRoute = require('react-router-dom').Route;
var Redirect = require('react-router-dom').Redirect;

class mainPage extends React.Component {
    render() {
        return(
            // Gestiona peticiones
            <Switch>
              <Route exact path='/' component={require('./homePage')} />
              <Route exact path='/authors' component={require('./authors/authorPage')} />
              <Route path='/about' component={require('./about/aboutPage')} />
              <Redirect from='/about-us' to='about' />
              <Route path='*' component={require('./NotFoundPage')} />
            </Switch>
        );
    };
}

module.exports = mainPage;
