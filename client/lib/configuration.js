if(Meteor.isClient) {
	window.fbAsyncInit = function() {
		FB.init({
			appId: '651347891629612',
			version: 'v2.0',
			status: true,
			xfbml: true
		});
	};
}
