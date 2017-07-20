"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
//var AuthorApi = require('../../api/authorApi');  //Removed when 'flux' gets into action
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var super_this;

class AuthorPage extends React.Component {
    constructor() {
        super();
        super_this = this;
        this.state = {
            authors: AuthorStore.getAllAuthors()
        }
    }

    componentWillMount() {
        AuthorStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        super_this.setState({ authors: AuthorStore.getAllAuthors() });
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
