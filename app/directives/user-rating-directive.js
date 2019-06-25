angular.module('passengr')
	.directive('userRating', function () {
		return {
			templateUrl: '/directives/user-rating-directive.html',
			scope: {
				stars: '='
			},
			controller: function ($scope) {
				$scope.fill = [];
				const rating = Math.round($scope.stars);
				for (let i = 0; i < rating; i++) {
					$scope.fill[i] = true;
				}
			}
		}
	});