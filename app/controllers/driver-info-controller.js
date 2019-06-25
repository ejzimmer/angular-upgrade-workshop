angular.module('passengr')
	.controller('DriverInfoCtrl', async function ($scope, DriverService, driver) {
		$scope.driverName = driver.name;
		$scope.carColour = driver.colour;
		$scope.carModel = driver.car;

		DriverService.getDriverEta(driver.id).subscribe(eta => {

			$scope.eta = Math.round(eta);
		});
	});
