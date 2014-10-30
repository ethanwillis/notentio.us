Template.note_editor.rendered = function() {
	try {
		FB.XFBML.parse();
	} catch(e) {
		// XFBML parsed unsuccessfuly
	}   
	// Load our medium like text editor
	editorConfig =  {
		anchorInputPlaceholder: "Type a link..",
		buttons: ['justifyCenter', 'justifyFull', 'unorderedList', 'orderedList', 'indent', 'outdent', 'bold', 'italic', 'quote', 'header1', 'header2'],
		firstHeader: 'h1',
		secondHeader: 'h3',
		placeholder: ''
	}
	var editor = new MediumEditor('#editor', editorConfig);
	if( $('#editor').html() === "" ) {
		$('#editor').html("<h1><b> Title</b></h1> Write your note..");
	} else {  }
};

Template.compose_note.helpers ({
});

Template.compose_note.events ({
		'click #saveNote': function() {
			notes.update({_id: this._id},{ $set: { body: body.value, title: title.value}});
		}
});

Template.note_navigation.note = function() {
	var notebooksId = this.notebooks[0]._id;
	return notes.find({notebooks: {$elemMatch: { _id: notebooksId}}}); 
}

Template.note_editor.shareConfig = function() {
	var myHref = 'http://localhost:3000/view_note/'+this._id;
	return {href: myHref, layout: 'box-count'}; 
}

Template.note_editor.description = function() {
	if(this.body.length > 0 ) {
		return this.body.substring(1, 256);
	}	else {
		return "Read my note in my notebook!";
	}
}


