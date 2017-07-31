import Dispatcher from '../dispatcher/appDispatcher';
import CourseApi from '../api/courseApi';
import ActionTypes from '../constants/actionTypes';

var CourseActions = {
    createCourse: function(course) {
        var newCourse = CourseApi.saveCourse(course);
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });
    },

    updateCourse: function(course) {
        var updatedCourse = CourseApi.saveCourse(course);
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_COURSE,
            course: updatedCourse
        });
    },

    deleteCourse: function(id) {
        CourseApi.deleteCourse(id);
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COURSE,
            id: id
        });
    }

};

export default CourseActions;
