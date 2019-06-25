angular.module('passengr')
	.factory('LocationService', function () {
		return {
			formatAddress: function (addressParts) {
				const startIndex = addressParts.findIndex(part => part.types.includes('street_number'));
				const bits = addressParts.slice(startIndex, startIndex + 3).map(part => part.long_name);
				return `${bits[0]} ${bits[1]}, ${bits[2]}`;
			}

		};
	})
