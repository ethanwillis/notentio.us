Router.configure({
  layoutTemplate: 'main'
});

Router.onAfterAction(function() {
    var projectName='mycampushacks';
    if (this.route.name !== "index"){
        document.title = projectName + ' | ' + this.route.name.replace(/_/g, ' ');
    }
    else {
        document.title = projectName;
    }
});
Router.map(function() {
 
    this.route('textbook_marketplace', { 
        path: '/textbook_marketplace/' 
    }); 
	this.route('index', {
		path: '/',
		name: 'index'
	});

	this.route('manage_notebooks', {
		path: '/manage_notebooks/',
		name: 'manage_notebooks'
	});

	this.route('manage_notebook', {
		path: '/manage_notebook/:_id',
		data: function() { 
				return notebooks.findOne({_id: this.params._id });
		}
	});

	this.route('compose_note', {
		path: '/compose_note/:_id',
		data: function() {
			return notes.findOne({_id: this.params._id});
		},
		name: 'compose_note'
	});

	this.route('view_note', {
		path: '/view_note/:_id',
		data: function() {
			return notes.findOne({_id: this.params._id, isPublic: true});
		},
		name: 'view_note',
		layoutTemplate: 'public'
	});
});
