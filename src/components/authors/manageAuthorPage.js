import React from 'react';
import AuthorActions from '../../actions/authorActions';
import AuthorForm from './authorForm';
import AuthorStore from '../../stores/authorStore';
import toastr from 'toastr';

class ManageAuthorPage extends React.Component {
      constructor() {
          super();
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
          this.setState({dirty: true});
          const author = Object.assign({}, this.state.author);
          author[event.target.name] = event.target.value;
          this.setState({author});
      }

      authorFormIsValid() {
          var formIsValid = true;
          this.setState((prevState) => ({
              errors: {
                firstName: '',
                lastName: ''
              }
          }));

          if (this.state.author.firstName.length < 3) {
            this.setState((prevState) => ({
                errors: {
                  firstName: 'First name must be at least 3 characters.',
                  lastName: prevState.errors.lastName
                }
            }));
            formIsValid = false;
          }

          if (this.state.author.lastName.length < 3) {
            this.setState((prevState) => ({
                errors: {
                  firstName: prevState.errors.firstName,
                  lastName: 'Last name must be at least 3 characters.'
                }
            }));
            formIsValid = false;
          }
          return formIsValid;
      }

      saveAuthor(event) {
          event.preventDefault();
          if (!this.authorFormIsValid()) {
              return;
          }

          if (this.state.author.id) {
              AuthorActions.updateAuthor(this.state.author);
          } else {
              AuthorActions.createAuthor(this.state.author);
          }
          this.setState({ dirty: false });
          this.setState({ errors: { firstName: '', lastName: '' } });

          toastr.success("Author saved.");
          this.props.history.go(-1);
      }

      render() {
            return(
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState.bind(this)}
                    onSave={this.saveAuthor.bind(this)}
                    errors={this.state.errors}
                    dirty={this.state.dirty}
                  />
            );
    }
}

export default ManageAuthorPage;
