Template.manageNotebook.helpers ({
	hasNotes: function(notebookId) {
		var hasNotes = notes.find({notebooks: {$elemMatch: { _id: notebookId}}}).count();
		if( hasNotes > 0 ) {
			return true;
		} else {
			return false;
		}
	}
});

Template.manageNotebook.events ({
		'click #composeNewNote': function() {
			// create a new note in the database
			var notebooksData = [{_id: this._id, name: this.name}];
			var noteId = notes.insert({notebooks: notebooksData, createdBy: this.userId, isPublic: true});
			// route to the composer for this new note.
			Router.go('compose_note', notes.findOne({_id: noteId})); 
		},
		'click .deleteNote': function(event) {
			notes.remove({_id: event.target.id});
		},
		'click .editNote': function(event) {
			
		},
		'mouseover .editHover': function(event) {
			var editId = event.currentTarget.id;
			var selector = '#edit'+editId;
			if($(selector).css('display') != 'inline') {
				$(selector).css('display', 'inline');
			}
		},
		'mouseout .editHover': function(event) {
			var editId = event.currentTarget.id;
			var selector = '#edit'+editId;
			if($(selector).css('display') != 'none') {
				$(selector).css('display', 'none');
			}
		}
});

Template.manageNotebook.myNotes = function() {
	return notes.find({notebooks: {$elemMatch: {_id: this._id}}});
}
