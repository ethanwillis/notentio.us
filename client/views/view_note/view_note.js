Template.viewNote.rendered = function() {
	try {
		FB.XFBML.parse();
	} catch(e) {}
	editorConfig = {
		anchorInputPlaceholder: "Type a link..",
		buttons: [],
		disableEditing: true,
		placeholder: ''
	}
	editor = new MediumEditor('#editor', editorConfig);
	if( $('#editor').html() === "") {
		$('#editor').html('<h1><b> Title</b><h1> Some note text...');
	}
};

Template.viewNote.helpers ({
});

Template.viewNote.noteBody = function() {
	if( $('#editor') === undefined) {
		return "";
	}  
	else { 
		$('#editor').html( notes.findOne({_id: this._id}, {fields: {body: 1}}).body);
	}
};

Template.viewNote.events ({

});

Template.viewNote.likeConfig = function() {
	var myHref = 'http://localhost:3000/view_note/'+this._id;
	return {href: myHref};
}
