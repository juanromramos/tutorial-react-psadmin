"use strict";

var React = require('react');

class Select extends React.Component {
        renderAuthors() {
          var listItems;
          if (this.props.options.length > 0) {
            listItems = this.props.options.map((author) => {
              var value = author.firstName + ' ' + author.lastName;
              return <option value={value} key={author.id}>{value}</option>;
            });
            return listItems;
          } else {
            return <option value='No authors' key='no-authors'>No authors</option>;
          }
        }
        render() {
          return(
              <div className='form-group'>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className='field'>
                  <select
                    name={this.props.name}
                    ref={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className="form-control">
                    {this.renderAuthors()}
                  </select>
                  <div className='input'>{this.props.error}</div>
                </div>
              </div>
          );
    }
}

module.exports = Select;
