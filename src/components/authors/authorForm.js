"use strict";

var React = require('react');
var Input = require('../common/textInput');

class AuthorForm extends React.Component {
      render() {
        return(
            <form>
                <h1>Manage Author</h1>
                <Input
                    name='fistName'
                    label='First Name'
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}/>
                <Input
                    name='lastName'
                    label='Last Name'
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}/>
                <input type='submit' value='Save' className='btn btn-default' />
            </form>
        );
    }
}

module.exports = AuthorForm;
