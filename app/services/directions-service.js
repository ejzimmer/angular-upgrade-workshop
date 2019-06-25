angular.module('passengr')
	.factory('DirectionsService', function (MapService, LocationService) {
		const directionsService = new google.maps.DirectionsService();
		const directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(MapService.map);

		return {
			calculateRoute: function () {
				const coords = LocationService.origin.coords;
				const origin = new google.maps.LatLng(coords.latitude, coords.longitude);

				const request = {
					origin,
					destination: LocationService.destination.formatted_address,
					travelMode: 'DRIVING'
				};

				return new Promise((resolve, reject) => {
					directionsService.route(request, (result, status) => {
						if (status === 'OK') {
							this.route = result;
							resolve(result);
						} else {
							reject(status);
						}
					})
				})
			},
			renderRoute: function () {
				if (this.route) {
					directionsDisplay.setDirections(this.route);
				}
			}
		}
	});
