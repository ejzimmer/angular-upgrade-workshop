angular.module('passengr')
	.factory('TripHistoryService', () => {
		const trips = [
			{
				origin: '814 Ahwanee Ave, Sunnyvale, California',
				destination: '225 Bill Graham Pkwy, Mountain View',
				date: '9/5/19',
				time: '10:28',
				car: 'Toyota Prius',
				driver: 'Maria',
				price: 14.84,
				rating: 5
			},
			{
				origin: '221 City Rd, South Bank, Victoria',
				destination: '150 Bay St, Brighton, Victoria',
				date: '3/3/19',
				time: '16:20',
				car: 'Kia Rio',
				driver: 'Vineet',
				price: 20.62,
				rating: 4.3
			},
			{
				origin: '43 Stockdale St, Dickson, ACT',
				destination: '9 Ida St West, Bonner, ACT',
				date: '3/11/18',
				time: '12:08',
				car: 'Toyota Aurion',
				driver: 'Kareem',
				price: 40.73,
				rating: 5
			},
		];

		return {
			addTrip: (trip) => {
				trips.push(trip);
			},
			getTrips: () => Promise.resolve([...trips])
		}
	});