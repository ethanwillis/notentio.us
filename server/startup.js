if(Meteor.isServer) { 
	Meteor.startup(function() {
		if(courses.find({school_code: '003509'}).count() === 0) {
		}
	});
};
