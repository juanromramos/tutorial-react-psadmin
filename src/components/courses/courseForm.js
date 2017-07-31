import React from 'react';
import Input from '../common/textInput';
import Select from '../common/selectInput';
import { Prompt } from 'react-router-dom';
import PropTypes from 'prop-types';

class CourseForm extends React.Component {
    constructor(props) {
      super(props);
      // valor por defecto
      if (this.props.authors.length > 0) {
        this.props.course.author = this.props.authors[0].firstName + ' ' + this.props.authors[0].lastName;
      } else {
        this.props.course.author = 'No authors';
      }
    }

    render() {
      return(
            <form>
                <h1>Manage Course</h1>
                <Input
                  name='title'
                  label='Title'
                  value={this.props.course.title}
                  onChange={this.props.onChange}
                  error={this.props.errors.title}
                />
                <Select
                  name='author'
                  label='Author'
                  value={this.props.course.author}
                  onChange={this.props.onChange}
                  options={this.props.authors}
                />
                <Input
                  name='category'
                  label='Category'
                  value={this.props.course.category}
                  onChange={this.props.onChange}
                  error={this.props.errors.category}
                />
                <Input
                  name='length'
                  label='Length'
                  value={this.props.course.length}
                  onChange={this.props.onChange}
                  error={this.props.errors.length}
                />
                <Input
                  name='watchHref'
                  label='URL'
                  value={this.props.course.watchHref}
                  onChange={this.props.onChange}
                  error={this.props.errors.watchHref}
                />
                <Prompt
                  when={this.props.dirty}
                  message={location => (`Are you sure you want to go to ${location.pathname} ?`)}
                />
                <input type='submit' value='Save' className='btn btn-default' onClick={this.props.onSave} />
            </form>
        );
    }
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default CourseForm;
