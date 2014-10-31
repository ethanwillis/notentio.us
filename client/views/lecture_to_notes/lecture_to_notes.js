Template.lectureToNotes.events({
	'click #record': function() {
		if( hasUserMedia() ) {
			$('#record').css('display', 'none');
			options = { 'media': {video: false, audio: true},
									'callback': function(localMediaStream) {
										$('#stopRecord').css('display', 'block');
										$('#stopRecord').css('margin-left', 'auto');
										$('#stopRecord').css('margin-right', 'auto');
									},
									'errCallback': function(err) { 
										console.log(err);
									}
								};
			getActualUserMedia(options);
		}
	},
	'click #stopRecord': function() {
		$('#stopRecord').css('display', 'none');
		$('#record').css('display', 'block');
		$('#record').css('margin-left', 'auto');
		$('#record').css('margin-right', 'auto');
	}
});

getActualUserMedia = function(options) {
	if( navigator.getUserMedia != undefined ) {
		return navigator.getUserMedia(options.media, options.callback, options.errCallback);
	} else if( navigator.webkitGetUserMedia != undefined ) {
		return navigator.webkitGetUserMedia(options.media, options.callback, options.errCallback);
	} else if( navigator.mozGetUserMedia != undefined ) {
		return navigator.mozGetUserMedia(options.media, options.callback, options.errCallback);
	} else if( navigator.msGetUserMedia != undefined ) {
		return navigator.msGetUserMedia(options.media, options.callback, options.errCallback);
	} else {
		return undefined;
	}
};

hasUserMedia = function() {
	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
};
