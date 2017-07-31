import Dispatcher from '../dispatcher/appDispatcher';
import AuthorApi from '../api/authorApi';
import CourseApi from '../api/courseApi';
import ActionTypes from '../constants/actionTypes';

var InitiliazeActions = {
    initApp: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors(),
                courses: CourseApi.getAllCourses()
            }
        });
    }
};

export default InitiliazeActions;
