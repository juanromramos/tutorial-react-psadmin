import React from 'react';
import PropTypes from 'prop-types';
import CourseActions from '../../actions/courseActions';
import toastr from 'toastr';

class CourseList extends React.Component {
    deleteCourse(id, event) {
        event.preventDefault();
        CourseActions.deleteCourse(id);
        toastr.success('Course Deleted');
    }

    render() {
        var createCourseRow = function(course) {
          var id = Math.floor((Math.random() * 100000) + 1);
          return (
            <tr key={course.id + '-' + id}>
                <td><a target='_blank' href={course.watchHref} className='btn btn-info'>Watch</a></td>
                {/* v2 */}
                {/* <td><a href='#' onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td> */}
                <td><button onClick={this.deleteCourse.bind(this, course.id)} className='btn btn-danger'>Delete</button></td>
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

export default CourseList;
