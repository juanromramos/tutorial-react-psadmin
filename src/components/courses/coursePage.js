"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
// var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var CourseList = require('./courseList');
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
                <Link to='/course' className='btn btn-default'>Add Course</Link>
                <hr />
                <CourseList courses={this.state.courses}/>
            </div>
        );
    }
}

module.exports = CoursePage;
