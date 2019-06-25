angular.module('passengr')
	.directive('userRating', function () {
		return {
			restrict: 'E',
			templateUrl: '/directives/user-rating-directive.html',
			scope: {
				stars: '='
			},
			controller: function ($scope) {

				this.$onInit = () => {
					$scope.fill = [];
					const rating = Math.round($scope.stars);
					for (let i = 0; i < rating; i++) {
						$scope.fill[i] = true;
					}
	
				}
			}
		}
	});