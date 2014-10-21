Template.view_note.rendered = function() {
	try {
		FB.XFBML.parse();
	} catch(e) {}
};

Template.view_note.helpers ({
    // controllers
    tpl_info: function() {
        return 'This is view_note template, find me at client/views/view_note'
    }

});

Template.view_note.events ({

    // event handlers
    'click #delete': function() {
        //
    }

});

Template.view_note.likeConfig = function() {
	var myHref = 'http://localhost:3000/view_note/'+this._id;
	return {href: myHref};
}
