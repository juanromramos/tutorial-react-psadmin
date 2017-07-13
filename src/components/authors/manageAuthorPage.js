"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

class ManageAuthorPage extends React.Component {
      constructor() {
          super();
          this.state = {
            author: { id: '', firstName: '', lastName: '' }
          };
      }

      setAuthorState(event) {
          // const author = Object.assign({}, this.state.author);
          // author[event.target.name] = event.target.value;
          // this.setState({author});
      }

      render() {
        return(
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState} />
        );
    }
}

module.exports = ManageAuthorPage;
