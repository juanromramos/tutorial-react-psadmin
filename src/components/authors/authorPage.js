"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
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
                <Link to='/addAuthor' className='btn btn-default'>Add Author</Link>
                <hr />
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = AuthorPage;
