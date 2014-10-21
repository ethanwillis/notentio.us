//Meteor.publish('a_collection', function(){
//    return 'a_collection'.find();
//});

Meteor.publish('notes', function(){
    var currentUserId = this.userId;
		return notes.find({$or: [{createdBy: currentUserId}, {isPublic: true}]});
});

Meteor.publish('notebooks', function(){
		var currentUserId = this.userId;
    return notebooks.find({'createdBy._id': currentUserId});
});
