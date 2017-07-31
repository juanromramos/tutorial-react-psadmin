import React from 'react';
import CourseActions from '../../actions/courseActions';
import CourseForm from './courseForm';
import CourseStore from '../../stores/courseStore';
import AuthorStore from '../../stores/authorStore';
import toastr from 'toastr';

var super_this;

class ManageCoursePage extends React.Component {
      constructor() {
          super();
          super_this = this;
          this.state = {
            course: { id:'', title:'', watchHref:'',  author:'', length:'', category:'' },
            authors: AuthorStore.getAllAuthors(),
            errors: { title:'', category:'', length:'', watchHref:'' },
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
          // this.setState({ errors: {} });
          this.state.errors = {};
          let errors = Object.assign({}, this.state.errors);

          if (this.state.course.title.length < 3) {
            errors.title = 'Title must be at least 3 characters.';
            this.setState({errors});
            formIsValid = false;
          }

          if (this.state.course.category.length < 3) {
            errors.category = 'Category must be at least 3 characters.';
            this.setState({errors});
            formIsValid = false;
          }

          if (this.state.course.length.length < 3) {
            errors.length = 'Length must be in hh:mm:ss format.';
            this.setState({errors});
            formIsValid = false;
          }

          if (this.state.course.watchHref.length < 3) {
            errors.watchHref = 'URL must be at least 3 characters.';
            this.setState({errors});
            formIsValid = false;
          }
          // this.setState({ errors: this.state.errors });
          return formIsValid;
      }

      saveCourse(event) {
          event.preventDefault();
          if (!super_this.courseFormIsValid()) {
              return;
          }

          var authorName = super_this.state.course.author;
          var authorObj = { id: authorName.split(' ')[0].toLowerCase() + '-' + authorName.split(' ')[1].toLowerCase(), name: authorName };
          super_this.state.course.author = authorObj;

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
                authors={this.state.authors}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors}
                dirty={this.state.dirty}
              />
        );
    }
}

export default ManageCoursePage;
