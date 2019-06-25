import './app.js';
import './legacy-imports.js';
import { downgradeComponent } from '@angular/upgrade/static';

import { HelpComponent } from '../src/app/help/help.component';
import { YourTripsComponent } from '../src/app/your-trips/your-trips.component';

export const LegacyModule = angular.module('passengr')
	.directive('appHelp', downgradeComponent({ component: HelpComponent }))
	.directive('appYourTrips', downgradeComponent({ component: YourTripsComponent }));
