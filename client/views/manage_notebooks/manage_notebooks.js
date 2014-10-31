Template.manageNotebooks.helpers ({
		// controllers
    tpl_info: function() {
        return 'This is manage_notebook template, find me at client/views/manage_notebook'
    },
		hasNotes: function(notebookId) {
			var hasNotes = notes.find({notebooks: {$elemMatch: { _id: notebookId}}}).count();
			if(hasNotes > 0) {
				return true;
			}	else {
				return false;
			}
		},
		hasNotebooks: function() {
			var notebookCount = notebooks.find({}).count();
			if( notebookCount > 0 )	{
				return true;
			} else {
				return false;
			}
		}
});



Template.manageNotebooks.events ({
		'click #createNotebook': function() {
		  // Insert notebook into database	
			var createdByUser = Meteor.user();
			notebooks.insert({
					name: notebookName.value,
					createdBy: createdByUser
			});			

			// "Zero out" the modal form to allow creation of a new 
			// Notebook
			notebookName.value = "";
		},
		'click .deleteNotebook': function() {
			notebooks.remove({_id: event.target.id});
		},
		'mouseover .editHover': function(event) {
			var editId = event.currentTarget.id;
			var selector = '#edit'+editId;
			$(selector).css('display', 'inline');
		},
		'mouseout .editHover': function(event) {
			var editId = event.currentTarget.id;
			var selector = '#edit'+editId;
			$(selector).css('display', 'none');
		}
});

Template.manageNotebooks.notebooks = function() {
	return notebooks.find({});
}

