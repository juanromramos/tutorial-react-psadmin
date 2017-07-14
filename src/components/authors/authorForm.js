"use strict";

var React = require('react');
var Input = require('../common/textInput');
var PropTypes = require('prop-types');

class AuthorForm extends React.Component {
      render() {
        return(
            <form>
                <h1>Manage Author</h1>
                <Input
                    name='firstName'
                    label='First Name'
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName} />
                <Input
                    name='lastName'
                    label='Last Name'
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName} />

                <input type='submit' value='Save' className='btn btn-default' onClick={this.props.onSave} />
            </form>
        );
    }
}

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
};

module.exports = AuthorForm;
