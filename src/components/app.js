"use strict";

var React = require('react');
var Header = require('./common/header');
var NewHeader = require('./common/new-header');
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;

var Redirect = require('react-router-dom').Redirect;

class App extends React.Component {
    render() {
        // // Custom routing code
        // var Child;
        // switch(this.props.route) {
        //     case 'home': Child = Home; break;
        //     case 'authors': Child = Authors; break;
        //     case 'about': Child = About; break;
        //     default: Child = Home;
        // }
        return (
            <div>
                <NewHeader />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path='/' component={require('./homePage')} />

                        <Route exact path='/authors' component={require('./authors/authorPage')} />
                        <Route exact path='/author' component={require('./authors/manageAuthorPage')} />
                        <Route exact path='/author/:id' component={require('./authors/manageAuthorPage')} />

                        <Route exact path='/courses' component={require('./courses/coursePage')} />
                        <Route exact path='/course' component={require('./courses/manageCoursePage')} />
                        <Route exact path='/course/:id' component={require('./courses/manageCoursePage')} />

                        <Route path='/about' component={require('./about/aboutPage')} />
                        <Redirect from='/about-us' to='about' />

                        <Route path='*' component={require('./NotFoundPage')} />
                  </Switch>
                </div>
            </div>
        );
    };
}

module.exports = App;
