Template.manage_notebook.helpers ({

    // controllers
    tpl_info: function() {
        return 'This is manage_notebook template, find me at client/views/manage_notebook'
    }

});

Template.manage_notebook.events ({
		'click #composeNewNote': function() {
			// create a new note in the database
			var notebooksData = [{_id: this._id, name: this.name}];
			var noteId = notes.insert({notebooks: notebooksData, createdBy: this.userId, isPublic: true});
			// route to the composer for this new note.
			Router.go('compose_note', notes.findOne({_id: noteId})); 
		},
		'click .deleteNote': function(event) {
			notes.remove({_id: event.target.id});
		}
});

Template.manage_notebook.myNotes = function() {
	return notes.find({});//{notebooks: {$elemMatch: {_id: this._id}}});
}
