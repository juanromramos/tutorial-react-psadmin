import React from 'react';
import CourseActions from '../../actions/courseActions';
import CourseForm from './courseForm';
import CourseStore from '../../stores/courseStore';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
      constructor() {
          super();
          this.state = {
            course: { id:'', title:'', watchHref:'',  author:'', length:'', category:'' },
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
        this.setState({dirty: true});
        const course = Object.assign({}, this.state.course);
        course[event.target.name] = event.target.value;
        this.setState({course});
      }

      courseFormIsValid() {
          var formIsValid = true;
          this.setState((prevState) => ({
              errors: {
                title:'',
                category:'',
                length:'',
                watchHref:''
              }
          }));

          if (this.state.course.title.length < 3) {
            this.setState((prevState) => ({
                errors: {
                  title: 'Title must be at least 3 characters.',
                  category: prevState.errors.category,
                  length: prevState.errors.length,
                  watchHref: prevState.errors.watchHref
                }
            }));
            formIsValid = false;
          }

          if (this.state.course.category.length < 3) {
            this.setState((prevState) => ({
                errors: {
                  title: prevState.errors.title,
                  category: 'Category must be at least 3 characters.',
                  length: prevState.errors.length,
                  watchHref: prevState.errors.watchHref
                }
            }));
            formIsValid = false;
          }

          if (this.state.course.length.length < 3) {
            this.setState((prevState) => ({
                errors: {
                  title: prevState.errors.title,
                  category: prevState.errors.category,
                  length: 'Length must be in hh:mm:ss format.',
                  watchHref: prevState.errors.watchHref
                }
            }));
            formIsValid = false;
          }

          if (this.state.course.watchHref.length < 3) {
            this.setState((prevState) => ({
                errors: {
                  title: prevState.errors.title,
                  category: prevState.errors.category,
                  length: prevState.errors.length,
                  watchHref: 'URL must be at least 3 characters.'
                }
            }));
            formIsValid = false;
          }
          return formIsValid;
      }

      saveCourse(event) {
          event.preventDefault();
          if (!this.courseFormIsValid()) {
              return;
          }

          // var authorName = this.state.course.author;
          // var authorObj = { id: authorName.split(' ')[0].toLowerCase() + '-' + authorName.split(' ')[1].toLowerCase(), name: authorName };
          // this.state.course.author = authorObj;

          if (this.state.course.id) {
              CourseActions.updateCourse(this.state.course);
          } else {
              CourseActions.createCourse(this.state.course);
          }
          this.setState({dirty: false});
          toastr.success("Course saved");
          this.props.history.go(-1);
      }

      render() {
        return(
            <CourseForm
                course={this.state.course}
                onChange={this.setCourseState.bind(this)}
                onSave={this.saveCourse.bind(this)}
                errors={this.state.errors}
                dirty={this.state.dirty}
              />
        );
    }
}

export default ManageCoursePage;
