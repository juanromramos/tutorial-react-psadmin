import React from 'react';
import Input from '../common/textInput';
import Select from '../common/selectInput';
import { Prompt } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthorStore from '../../stores/authorStore';

class CourseForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authors: AuthorStore.getAllAuthors()
      };

      if (this.state.authors.length > 0) {
        this.props.course.author.name = this.state.authors[0].firstName + ' ' + this.state.authors[0].lastName;
      } else {
        this.props.course.author.name = 'No authors';
      }
    }

    render() {
      // Update 'author.id' whenever
      // the form is rendered (in case)
      // there are only 1 or 0 authors
      this.props.course.author.id = this.props.course.author.name.split(' ')[0].toLowerCase() + '-' + this.props.course.author.name.split(' ')[1].toLowerCase();
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
                  value={this.props.course.author.name}
                  onChange={this.props.onChange}
                  options={this.state.authors}
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
