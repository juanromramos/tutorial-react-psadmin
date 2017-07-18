"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');

var toastr = require('toastr');
var super_this;

class ManageCoursePage extends React.Component {
      constructor() {
          super();
          super_this = this;
          this.state = {
            course: { id:'', title:'', watchHref:'',  author:'', length:'', category:'' },
            errors: {},
            dirty: false
          };
      }

      componentWillMount() {
          var courseId = this.props.match.params.id;
          if (courseId)
              this.setState({course: CourseStore.getCourseById(courseId)});
      }

      setCourseState(event) {
          super_this.setState({dirty: true});
          const course = Object.assign({}, super_this.state.course);
          course[event.target.name] = event.target.value;
          super_this.setState({course});
      }

      courseFormIsValid() {
          var formIsValid = true;
        //   this.state.errors = {}; // Clear any previous errors.
        //
        //   if (this.state.author.firstName.length < 3) {
        //       this.state.errors.firstName = 'First name must be at least 3 characters.';
        //       formIsValid = false;
        //   }
        //
        //   if (this.state.author.lastName.length < 3) {
        //       this.state.errors.lastName = 'Last name must be at least 3 characters.';
        //       formIsValid = false;
        //   }
        //
        //   this.setState({ errors: this.state.errors });
          return formIsValid;
      }

      saveCourse(event) {
          event.preventDefault();
          var authorName = super_this.state.course.author;
          var authorObj = { id: authorName.split(' ')[0].toLowerCase() + '-' + authorName.split(' ')[1].toLowerCase(), name: authorName };
          super_this.state.course.author = authorObj;
          if (!super_this.courseFormIsValid()) {
              return;
          }

          if (super_this.state.course.id) {
              CourseActions.updateCourse(super_this.state.course);
          } else {
              CourseActions.createCourse(super_this.state.course);
          }
          super_this.setState({dirty: false});
          toastr.success("Course saved");
          super_this.props.history.go(-1);
      }

      render() {
        return(
            <CourseForm
                course={this.state.course}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors} />
        );
    }
}

module.exports = ManageCoursePage;
