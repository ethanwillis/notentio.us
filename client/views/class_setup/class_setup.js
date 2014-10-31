Template.classSetup.helpers ({
});

if(Meteor.isClient) {
	mySearch = {
		query: '',
		dep: new Deps.Dependency,
		get: function() {
			this.dep.depend();
			return this.query;
		},
		update: function(data) {
			this.query = data;
			this.dep.changed();
		}

	}
};

Template.classSetup.events ({
		'keyup #courseSearch': function() {
			mySearch.update(courseSearch.value);	
		}
});

Template.listCourses.courses = function() {
	return courses.find({$or: [{department_code: mySearch.get()},{department_title: mySearch.get()},{course_code: mySearch.get()}]}, {limit: 75});
	/*
		Very fucking slow TODO: Find a fast efficient way to do distinct() and group by queries for mongodb on meteor.
	var distinctEntries = _.uniq(courses.find({}, {
  	  sort: {department_code: 1}, fields: {department_code: true}
		}).fetch().map(function(x) {
    	return {department_code: x.department_code};
		}), true); 

	return distinctEntries;*/
};

Template.courseSearch.query = function() {
	return mySearch.get();
};
