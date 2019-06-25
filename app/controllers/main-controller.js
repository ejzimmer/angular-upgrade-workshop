angular.module('passengr')
	.controller('MainCtrl', function ($scope, GeolocationService, MapService) {
		let mapResolve;
		const mapPromise = new Promise(resolve => mapResolve = resolve);

		$scope.map = {
			center: { latitude: 0, longitude: 0 },
			zoom: 17,
			options: {
				disableDefaultUI: true
			},
			events: {
				tilesloaded: map => {
					mapResolve(map);
					MapService.map = map;
				}
			}
		};

		const positionPromise = GeolocationService.getCurrentPosition();

		Promise.all([mapPromise, positionPromise]).then(([map, position]) => {
			const { latitude, longitude } = position.coords;
			$scope.map.center = { latitude, longitude };

			const myPosition = new google.maps.LatLng(latitude, longitude);
			const marker = new CurrentPositionMarker(myPosition, map);

			$scope.$apply();
		});
	});

class CurrentPositionMarker extends google.maps.OverlayView {
	constructor(latlng, map, args = {}) {
		super();

		this.latlng = latlng;
		this.args = args;
		this.setMap(map);
	}

	draw() {
		if (!this.div) {
			this.div = document.createElement('div');
			this.div.className = 'current-position';

			this.getPanes().overlayImage.appendChild(this.div);
		}

		const point = this.getProjection().fromLatLngToDivPixel(this.latlng);
		this.div.style.left = `${point.x - 7.5}px`;
		this.div.style.top = `${point.y - 15}px`;
	}

	remove() {
		if (this.div) {
			this.div.parentNode.removeChild(this.div);
			this.div = undefined;
		}
	}

	getPosition() {
		return this.latlng;
	}
}
