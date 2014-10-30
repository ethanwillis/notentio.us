//Meteor.publish('a_collection', function(){
//    return 'a_collection'.find();
//});

Meteor.publish('notes', function(){
    var currentUserId = this.userId;
		// TODO: Fix security hole, this exposes notes to the public under the view_note template
		// However it also exposes the compose_note functionality. And you can't simply hide the 
		// compose_note template to fix this hole, because it can be uncovered or the
		// note can be updated via the JS console. 
		return notes.find({$or: [{createdBy: currentUserId}, {isPublic: true}]});
});

Meteor.publish('notebooks', function(){
		var currentUserId = this.userId;
    return notebooks.find({'createdBy._id': currentUserId});
});

Meteor.publish('feedback', function(){
    return feedback.find({});
});

Meteor.publish('lectures', function(){
    return lectures.find();
});

Meteor.publish('courses', function(){
    return courses.find();
});
