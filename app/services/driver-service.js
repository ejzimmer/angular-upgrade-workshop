angular.module('passengr')
	.factory('DriverService', function ($interval) {
		const drivers = ['Maria', 'Vineet', 'Abdu', 'Manpreet', 'Rene', 'Ashwani', 'Aravind', 'Christopher', 'Yusuf', 'Leonardo'];
		const cars = ['Toyota Prius', 'Kia Rio', 'Toyota Camry', 'Skoda Superb', 'Mazda 6', 'Holden Commodore', 'Hyundai Accent'];
		const colours = ['black', 'white', 'red', 'blue'];

		const pickRandom = list => list[Math.floor(Math.random() * list.length)];

		return {
			findDriverForRoute(route) {
				return new Promise((resolve) => {
					const thinkingTime = Math.random() * 5000;
					setTimeout(() => {
						resolve({
							id: `${Math.random()}`.replace('.', ''),
							name: pickRandom(drivers),
							car: pickRandom(cars),
							colour: pickRandom(colours)
						})
					}, thinkingTime)
				});
			},
			getDriverEta(driverId) {
				return {
					subscribe: function (callback) {
						let eta = Math.ceil(Math.random() * 7);
						callback(eta);

						const interval = $interval(() => {
							const delta = Math.random();
							eta -= delta;
							callback(eta);
							
							if (eta < 0) {
								$interval.cancel(interval);
								callback(0);
							}
						}, 15000)
					}
				}
			}
		}
	});
