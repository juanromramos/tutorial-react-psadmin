import React from 'react';
import { Link } from 'react-router-dom';
import CourseStore from '../../stores/courseStore';
import CourseList from './courseList';

var super_this;

class CoursePage extends React.Component {
    constructor() {
        super();
        super_this = this;
        this.state = {
            courses: CourseStore.getAllCourses(),
        }
    }

    componentWillMount() {
        CourseStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        CourseStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        super_this.setState({ courses: CourseStore.getAllCourses() });
    }

    render() {
        return(
            <div>
                <h1>Courses</h1>
                <Link to='/course' className='btn btn-success'>Add Course</Link>
                <CourseList courses={this.state.courses}/>
            </div>
        );
    }
}

export default CoursePage;
