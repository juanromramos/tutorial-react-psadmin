import React from 'react';
import AuthorActions from '../../actions/authorActions';
import AuthorForm from './authorForm';
import AuthorStore from '../../stores/authorStore';
import toastr from 'toastr';

var super_this;

class ManageAuthorPage extends React.Component {
      constructor() {
          super();
          super_this = this;
          this.state = {
            author: { id: '', firstName: '', lastName: '' },
            errors: { firstName: '', lastName: '' },
            dirty: false
          };
      }

      componentWillMount() {
          var authorId = this.props.match.params.id;
          if (authorId)
              this.setState({author: AuthorStore.getAuthorById(authorId)});
      }

      setAuthorState(event) {
          super_this.setState({dirty: true});
          const author = Object.assign({}, super_this.state.author);
          author[event.target.name] = event.target.value;
          super_this.setState({author});
      }

      authorFormIsValid() {
          var formIsValid = true;
          // this.setState({ errors: {} });
          this.state.errors = {};
          let errors = Object.assign({}, this.state.errors);

          if (this.state.author.firstName.length < 3) {
            errors.firstName = 'First name must be at least 3 characters.';
            this.setState({errors});
            formIsValid = false;
          }

          if (this.state.author.lastName.length < 3) {
            errors.lastName = 'Last name must be at least 3 characters.';
            this.setState({errors});
            formIsValid = false;
          }
          //this.setState({ errors: this.state.errors });
          return formIsValid;
      }

      saveAuthor(event) {
          event.preventDefault();

          if (!super_this.authorFormIsValid()) {
              return;
          }

          if (super_this.state.author.id) {
              AuthorActions.updateAuthor(super_this.state.author);
          } else {
              AuthorActions.createAuthor(super_this.state.author);
          }
          super_this.setState({ dirty: false });
          super_this.setState({ errors: { firstName: '', lastName: '' } });

          toastr.success("Author saved.");
          super_this.props.history.go(-1);
      }

      render() {
            return(
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors}
                    dirty={this.state.dirty}
                  />
            );
    }
}

export default ManageAuthorPage;
