Template.add_classes.helpers ({

    // controllers
    tpl_info: function() {
        return 'This is add_classes template, find me at client/views/add_classes'
    }

});

Template.add_classes.events ({

    // event handlers
    'click #submitClass': function() {
        courses.insert({'department_code': departmentCode.value, 'department_title': departmentTitle.value, 'course_code': courseCode.value, 'course_title': courseTitle.value, 'term': term.value, 'sections': []});
			//zero elements that change frequently
			lastCourseCode.value = courseCode.value;
			courseCode.value = "";
			courseTitle.value = "";
    	
		}

});

