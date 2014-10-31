// Global variable that keeps track of the last size of our document.
var sizeAtLastUpload = 0;

// Actions to take when compose_note template is fully rendered
Template.composeNote.rendered = function() {
};

// Actions to take when social_share_modal is rendered
Template.socialShareModal.rendered = function() {
};

// Actions to take when note_editor template is fully rendered
Template.noteEditor.rendered = function() {
	try {
		FB.XFBML.parse();
	} catch(e) {
		// XFBML parsed unsuccessfuly
	}   
	// Configure and enable our medium like text editor
	editorConfig =  {
		anchorInputPlaceholder: "Type a link..",
		buttons: ['justifyCenter', 'justifyFull', 'unorderedList', 'orderedList', 'indent', 'outdent', 'bold', 'italic', 'quote', 'header1', 'header2'],
		firstHeader: 'h1',
		secondHeader: 'h3',
		placeholder: ''
	}
	editor = new MediumEditor('#editor', editorConfig);
	editorInnerHTML = $('#editor').html();
	if( editorInnerHTML === "" ) {
		$('#editor').html("<h1><b> Title</b></h1> Write your note..");
	} else { 
		sizeAtLastUpdate = editorInnerHTML.length;
	}
};

// Helpers for our compose_note template
Template.composeNote.helpers({
});

// Helpers for our social_share_modal template
Template.socialShareModal.helpers({
});

// Helpers for our note_editor template
Template.noteEditor.helpers({
})


// Event handlers for compose_note template
Template.composeNote.events({
});

// Event handlers for social_share_modal template
Template.socialShareModal.events({
});

// Event handlers for note_editor template
Template.noteEditor.events ({
		// handle text input in our note editor
		'input #editor': function() {
			/*
					Get the current document and compare it to the
					the previous document's size and only push 
					changes to mongodb if the size has significantly 
					changed.  
			*/
			noteDocument = $('#editor').html();
			if( (noteDocument.length - sizeAtLastUpload) > 15 ) {
				// set the note title to be the value of the first h1
				noteTitle = $('#editor h1').text();
				notes.update({_id: this._id}, { $set: {body: noteDocument, title: noteTitle}});
			} else {
				// Do nothing because size of document hasn't changed
				// enough since the last update
			}
		}
});

/*
	Creates the configuration for our facebook share button.
*/
Template.socialShareModal.shareConfig = function() {
	var myHref = 'http://localhost:3000/view_note/'+this._id;
	return {href: myHref, layout: 'box-count'}; 
}
