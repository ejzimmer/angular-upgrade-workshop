angular.module('passengr')
	.controller('PickupCtrl', function ($scope, LocationService, $state) {
		$scope.currentLocation = LocationService.formatAddress(LocationService.origin.address);
		$scope.loading = false;

		$scope.requestDriver = function () {
			$scope.loading = true;
			$state.go('map.driver-info');
		};
	});
