angular.module('passengr')
	.controller('DriverInfoCtrl', async function ($scope, DriverService, driver, JacketService) {
		$scope.driverName = driver.name;
		$scope.carColour = driver.colour;
		$scope.carModel = driver.car;
		$scope.jacketVerb = 'might';

		DriverService.getDriverEta(driver.id).subscribe(eta => {
			$scope.eta = Math.round(eta);
		});

		JacketService.isJacketNeeded().then((needed) => {
			$scope.jacketVerb = needed ? 'will' : 'won\'t';
		});
	});
