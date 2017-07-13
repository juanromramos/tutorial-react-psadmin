"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

class AuthorPage extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: []
        }
    }

    componentWillMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    }

    render() {
        return(
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = AuthorPage;
