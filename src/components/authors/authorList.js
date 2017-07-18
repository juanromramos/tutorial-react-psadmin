"use strict";

var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

//import PropTypes from 'prop-types'; // Salta error en Reactify?

class AuthorList extends React.Component {
    deleteAuthor(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    }

    render() {
        var createAuthorRow = function(author) {
            return (
              <tr key={author.id}>
                  <td><a href='#' onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                  <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
                  <td>{author.firstName} {author.lastName}</td>
              </tr>
            );
        };

        return(
            <div>
                <table className='table table-condensed'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
};

module.exports = AuthorList;
