angular.module('passengr')
	.directive('userProfile', function () {
		return {
			templateUrl: '/directives/profile-directive.html',
			controller: function ($scope, $element) {
				const element = $element[0];

				$scope.toggleSettings = function () {
					element.classList.toggle('show-pane');
				};

				element.querySelector('.profile-picture').style.backgroundImage = 'url(images/Ellen_ripley.jpg)';
				$scope.userName = 'Ellen Ripley';
			}
		}
	});