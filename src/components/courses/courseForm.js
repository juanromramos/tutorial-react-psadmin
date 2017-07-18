"use strict";

var React = require('react');
var Input = require('../common/textInput');
var PropTypes = require('prop-types');

class CourseForm extends React.Component {
      render() {
        return(
            <form>
                <h1>Edit Course</h1>
                <Input
                    name='title'
                    label='Title'
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title} />
                <Input
                    name='author'
                    label='Author'
                    value={this.props.course.author}
                    onChange={this.props.onChange}
                    error={this.props.errors.author} />
                <Input
                    name='category'
                    label='Category'
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category} />
                <Input
                    name='length'
                    label='Length'
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length} />
                <Input
                    name='watchHref'
                    label='URL'
                    value={this.props.course.watchHref}
                    onChange={this.props.onChange}
                    error={this.props.errors.watchHref} />

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

module.exports = CourseForm;
