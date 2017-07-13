"use strict";

var React = require('react');
var Header = require('./common/header');
var Main = require('./mainPage');

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
                <Header />
                <div className="container-fluid">
                    <Main />
                </div>
            </div>
        );
    };
}

module.exports = App;
