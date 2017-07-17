"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
//var AuthorApi = require('../../api/authorApi');  //Removed when 'flux' gets into action
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

class AuthorPage extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: AuthorStore.getAllAuthors()
        }
    }

    render() {
        return(
            <div>
                <h1>Authors</h1>
                <Link to='/author' className='btn btn-default'>Add Author</Link>
                <hr />
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = AuthorPage;
