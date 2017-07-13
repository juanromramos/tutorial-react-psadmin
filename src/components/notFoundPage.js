"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <h1>404 - Page Not Found</h1>
                <p>Whoops! Sorry, there is nothing to see here.</p>
                <p><Link to='/'>Back to Home</Link></p>
            </div>
        );
    };
}

module.exports = NotFoundPage;
