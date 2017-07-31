import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
      render() {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += ' has-error';
        }
        return(
            <div className={wrapperClass}>
              <label htmlFor={this.props.name}>{this.props.label}</label>
              <div className='field'>
                <input type='text'
                  name={this.props.name}
                  className='form-control'
                  placeholder={this.props.placeholder}
                  ref={this.props.name}
                  value={this.props.value}
                  onChange={this.props.onChange} />
                <div className='input'>{this.props.error}</div>
              </div>
            </div>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default Input;
