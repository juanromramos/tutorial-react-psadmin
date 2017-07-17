"use strict";

var React = require('react');
var withRouter = require('react-router').withRouter;
var AuthorForm = require('./authorForm');
//var AuthorApi = require('../../api/authorApi');  //Removed when 'flux' gets into action
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');

var toastr = require('toastr');
var super_this;

class ManageAuthorPage extends React.Component {
      constructor() {
          super();
          super_this = this;
          this.state = {
            author: { id: '', firstName: '', lastName: '' },
            errors: {},
            dirty: false
          };
      }

      componentWillMount() {
          var authorId = this.props.match.params.id;
          if (authorId)
              this.setState({author: AuthorStore.getAuthorById(authorId)});
      }

      componentWillUnmount() {
          // Gestión del historial de navegación!
          // this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
          // if (this.state.dirty && !confirm('Leave without saving?')) {
          //   alert('not leaving');
          //   this.props.history.block('probando');
          // }
          //alert('leaving');
        }

      setAuthorState(event) {
          super_this.setState({dirty: true});
          const author = Object.assign({}, super_this.state.author);
          author[event.target.name] = event.target.value;
          super_this.setState({author});
      }

      authorFormIsValid() {
          var formIsValid = true;
          this.state.errors = {}; // Clear any previous errors.

          if (this.state.author.firstName.length < 3) {
              this.state.errors.firstName = 'First name must be at least 3 characters.';
              formIsValid = false;
          }

          if (this.state.author.lastName.length < 3) {
              this.state.errors.lastName = 'Last name must be at least 3 characters.';
              formIsValid = false;
          }

          this.setState({ errors: this.state.errors });
          return formIsValid;
      }

      saveAuthor(event) {
          event.preventDefault();

          if (!super_this.authorFormIsValid()) {
              return;
          }
          AuthorActions.createAuthor(super_this.state.author);
          super_this.setState({dirty: false});
          toastr.success("Author saved.");
          super_this.props.history.go(-1);
      }

      render() {
        return(
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors} />
        );
    }
}

module.exports = withRouter(ManageAuthorPage);
