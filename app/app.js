import angular from 'angular';

import 'lodash';
import 'angular-simple-logger';
import 'angular-ui-router';
import 'angular-google-maps';

angular.module('passengr', ['ui.router', 'uiGmapgoogle-maps'])
	.constant('apiKey', 'AIzaSyCKwKMt_VIYXsJRi7NPA1DpE-hmXF8v41Y')
	.config(function ($stateProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		
		$stateProvider
			.state('map', {
				abstract: true,
				url: '/map',
				templateUrl: '/controllers/main-controller.html',
				controller: 'MainCtrl'
			})
			.state('map.search', {
				url: '/search',
				templateUrl: '/controllers/search-controller.html',
				controller: 'SearchCtrl'
			})
			.state('map.confirm', {
				url: '/confirm',
				resolve: {
					route: async (DirectionsService) =>  DirectionsService.calculateRoute()
				},
				templateUrl: '/controllers/confirm-controller.html',
				controller: 'ConfirmCtrl'
			})
			.state('map.confirm-pickup', {
				url: '/confirm-pickup',
				templateUrl: '/controllers/pickup-controller.html',
				controller: 'PickupCtrl'
			})
			.state('map.driver-info', {
				url: '/driver-info',
				resolve: {
					driver: async function (DriverService, DirectionsService) {
						return DriverService.findDriverForRoute(DirectionsService.route);
					}
				},
				templateUrl: '/controllers/driver-info-controller.html',
				controller: 'DriverInfoCtrl'
			})
			.state('your-trips', {
				url: '/trips',
				component: 'appYourTrips'
			})
			.state('help', {
				url: '/legacy-help',
				controller: () => { 
					if (history.go(-1) !== 'help') {
						location = 'help';
					}
				}
			});
	});
