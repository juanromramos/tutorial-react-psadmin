"use strict";

var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

//import PropTypes from 'prop-types'; // Salta error en Reactify?

class AuthorList extends React.Component {
      render() {
        var createAuthorRow = function(author) {
            return (
              <tr key={author.id}>
                  {/* <td><a href={"/authors/" + author.id}>{author.id}</a></td> */}
                  <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
                  <td>{author.firstName} {author.lastName}</td>
              </tr>
            );
        };

        return(
            <div>
                <table className='table table-responsive table-bordered table-striped table-condensed table-hover'>
                    <thead>
                        <tr>
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
