Router.configure({
  layoutTemplate: 'main'
});

Router.onAfterAction(function() {
    var projectName='notentio.us';
    if (this.route.name !== "index"){
        document.title = projectName + ' | ' + this.route.name.replace(/_/g, ' ');
    }
    else {
        document.title = projectName;
    }
});
Router.map(function() {
 
    this.route('classSetup', { 
        path: '/class_setup/' 
    }); 
 
    this.route('addClasses', { 
        path: '/add_classes/' 
    }); 
    this.route('leaveFeedback', { 
        path: '/leave_feedback/',
				name: 'leave_feedback',
				layoutTemplate: 'public' 
    }); 
 
    this.route('aboutUs', { 
        path: '/about_us/' ,
				name: 'about_us',
				layoutTemplate: 'public'
    }); 
 
    this.route('careers', { 
        path: '/careers/',
				name: 'careers',
				layoutTemplate: 'public'
    }); 
 
    this.route('lecture_to_notes', { 
        path: '/lecture_to_notes/' 
    }); 
 
    this.route('textbookMarketplace', { 
        path: '/textbook_marketplace/' 
    }); 
	this.route('index', {
		path: '/',
		name: 'index',
		layoutTemplate: 'public'
	});

	this.route('manageNotebooks', {
		path: '/manage_notebooks/',
		name: 'manage_notebooks'
	});

	this.route('manageNotebook', {
		path: '/manage_notebook/:_id',
		data: function() { 
				return notebooks.findOne({_id: this.params._id });
		}
	});

	this.route('composeNote', {
		path: '/compose_note/:_id',
		data: function() {
			// Only allow logged in users to edit their notes.	
			if(Meteor.user()) {
				return notes.findOne({_id: this.params._id, });
			}
		},
		name: 'compose_note',
		layoutTemplate: 'fullscreen_layout'
	});

	this.route('viewNote', {
		path: '/view_note/:_id',
		data: function() {
			return notes.findOne({_id: this.params._id, isPublic: true});
		},
		name: 'view_note',
		layoutTemplate: 'fullscreen_layout'
	});

	this.route('liveLecture', {
		path: '/live_lecture/:_id',
		data: function() {
			return {lectureId: this.params._id};
		},
		name: 'live_lecture',
		layoutTemplate: 'public'
	});
});
