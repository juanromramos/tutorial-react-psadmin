import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthorActions from '../../actions/authorActions';
import toastr from 'toastr';

class AuthorList extends React.Component {
    deleteAuthor(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    }

    render() {
        var createAuthorRow = function(author, index) {
            return (
              <tr key={index}>
                  <td><button onClick={this.deleteAuthor.bind(this, author.id)} className='btn btn-danger'>Delete</button></td>
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

export default AuthorList;
