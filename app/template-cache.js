angular.module('passengr').run(function ($templateCache) {
	$templateCache.put('/controllers/search-controller.html', require('!raw-loader!./controllers/search-controller.html'));
	$templateCache.put('/controllers/confirm-controller.html', require('!raw-loader!./controllers/confirm-controller.html'));
	$templateCache.put('/controllers/pickup-controller.html', require('!raw-loader!./controllers/pickup-controller.html'));
	$templateCache.put('/controllers/driver-info-controller.html', require('!raw-loader!./controllers/driver-info-controller.html'));
	$templateCache.put('/controllers/main-controller.html', require('!raw-loader!./controllers/main-controller.html'));
	$templateCache.put('/directives/profile-directive.html', require('!raw-loader!./directives/profile-directive.html'));
	$templateCache.put('/directives/user-rating-directive.html', require('!raw-loader!./directives/user-rating-directive.html'));
});