angular.module('passengr')
	.controller('ConfirmCtrl', function ($scope, $state, route, DirectionsService) {
		$scope.destination = route.request.destination.query.split(',')[0];

		const leg = route.routes[0].legs[0];
		$scope.eta = (new Date()).getTime() + leg.duration.value;
		$scope.price = leg.distance.value * 0.003;

		DirectionsService.renderRoute();

		$scope.confirm = function () {
			$state.go('map.confirm-pickup');
		}
	});

function getTime() { return Math.round(Math.random() * 10) + 1; }
