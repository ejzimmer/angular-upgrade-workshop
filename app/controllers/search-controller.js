angular.module('passengr')
	.controller('SearchCtrl', function($scope, $element, GeolocationService, LocationService, $state) {
    GeolocationService.getCurrentPosition()
				.then(position => {
					LocationService.origin = { coords: position.coords };
				})
				.catch(() => {
					// Location not found, fake it
					LocationService.origin = {
						coords: { latitude: -37.8165604, longitude: 144.9453115 }
					}
				})
				.then(() => GeolocationService.getAddressFromCoords(LocationService.origin.coords))
				.then(address => {
					LocationService.origin.address = address.address_components
					$scope.startAddress = LocationService.formatAddress(LocationService.origin.address);
					$scope.$apply();
				});

		const input = $element[0].querySelector('.address.destination');
		const autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.setComponentRestrictions({country: 'au'});
		autocomplete.setFields(['address_component', 'formatted_address']);

		autocomplete.addListener('place_changed', function () {
			LocationService.destination = autocomplete.getPlace();
			$state.go('map.confirm');
		});
	});
