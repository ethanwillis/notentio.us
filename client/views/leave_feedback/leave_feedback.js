Template.leave_feedback.helpers ({

    tpl_info: function() {
        return 'This is leave_feedback template, find me at client/views/leave_feedback'
    }

});

Template.leave_feedback.events ({
		'click #sendFeedback': function() {
			// If a user isn't logged in then, make sure to get the extra
			// form fields.
			if(Meteor.user() == null) {
				// insert fields into the feedback collection
				feedback.insert({'feedback': feedbackText.value, 'email': emailAddress.value, 'firstname': firstName.value, 'lastname': lastName.value});
				// Zero out form to allow for another piece of feedback to be received without a page reload
				feedbackText.value = "";
				emailAddress.value = "";
				firstName.value = "";
				lastName.value = "";
			}	else {
				// insert fields into the feedback collection	
				feedback.insert({'feedback': feedbackText.value, 'user': Meteor.user()});
				// Zero out all form fields(in case of login) to allow for another piece of feedback to be received with a page reload.
				feedbackText.value = "";

				// display an alert
				$("#successAlert").css('display', 'block');
			}
		},
    // event handlers
    'click #delete': function() {
        //
    }

});

