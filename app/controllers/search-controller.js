angular.module('passengr')
	.controller('SearchCtrl', function($scope, $element, GeolocationService, LocationService, $state) {
    GeolocationService.getCurrentPosition()
				.then(position => {
					LocationService.origin = { coords: position.coords };
					return GeolocationService.getAddressFromCoords(position.coords)
				})
				.then(address => {
					LocationService.origin.address = address.address_components
					$scope.startAddress = LocationService.formatAddress(LocationService.origin.address)
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
