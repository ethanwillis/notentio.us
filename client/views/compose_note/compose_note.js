Template.note_editor.rendered = function() {
    try {
        FB.XFBML.parse();
    }catch(e) {}   
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


