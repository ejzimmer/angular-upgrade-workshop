angular.module('passengr')
	.directive('userRating', function () {
		return {
			templateUrl: '/directives/user-rating-directive.html',
			scope: {
				stars: '='
			}
		}
	});