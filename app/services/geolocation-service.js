angular.module('passengr')
.service('GeolocationService', function (apiKey) {
	this.key = apiKey;
	this.getCurrentPosition = function () {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				position => resolve(position),
				error => reject(error)
			)
		});
	};

	this.getAddressFromCoords = async function (coords) {
		if (coords) {
			const url = this.getReverseGeocodeUrl(coords);
			const response = await fetch(url);
			return (await response.json()).results[0];
		} else {
			console.log('no coords supplied')
		}
	};

	this.getReverseGeocodeUrl = function ({ latitude, longitude }) {
		const geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
		const latlng = `latlng=${latitude},${longitude}`;
		const filters = 'location_type=ROOFTOP&result_type=street_address';
		const apiKey = `key=${this.key}`;

		return `${geocodeUrl}?${latlng}&${filters}&${apiKey}`;
	}	
});
