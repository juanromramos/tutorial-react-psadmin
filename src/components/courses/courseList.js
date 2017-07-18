"use strict";

var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

class CourseList extends React.Component {
    deleteCourse(id, event) {
        event.preventDefault();
        CourseActions.deleteCourse(id);
        toastr.success('Course Deleted');
    }

    render() {
        var createCourseRow = function(course) {
            return (
              <tr key={course.id}>
                  <td><a target='_blank' href={course.watchHref}>Watch</a></td>
                  <td><a href='#' onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
                  <td>{course.title}</td>
                  <td>{course.author.name}</td>
                  <td>{course.category}</td>
                  <td>{course.length}</td>
              </tr>
            );
        };

        return(
            <div>
                <table className='table table-condensed'>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

module.exports = CourseList;
