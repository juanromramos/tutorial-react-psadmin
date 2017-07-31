//This file is mocking a web API by hitting hard coded data.
import courses from './courseData';
import _ from 'lodash';

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(course) {
	//return course.title.replace(' ', '-');
	return course.title.replace(' ', '-').toLowerCase().split(' ')[0];
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var CourseApi = {
	getAllCourses: function() {
		return _clone(courses);
	},

	getCoursesById: function(id) {
		var course = _.find(courses, {id: id});
		return _clone(course);
	},

	saveCourse: function(course) {
		console.log('Imagine saving course via AJAX call...');

		if (course.id) {
			var existingCourseIndex = _.indexOf(courses, _.find(courses, {id: course.id}));
			courses.splice(existingCourseIndex, 1, course);
		} else {
			//just simulating creation here. This data
			//would be generated on the server in a real app.
			course.id = _generateId(course);
			courses.push(_clone(course));
		}
		return course;
	},

	deleteCourse: function(id) {
		console.log('Imagine deleting course with id of ' + id + ' via AJAX call...');
		_.remove(courses, { id: id});
	}
};

export  default CourseApi;
