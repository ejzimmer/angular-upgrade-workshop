import './app.js';
import './legacy-imports.js';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { HelpComponent } from '../src/app/help/help.component';
import { YourTripsComponent } from '../src/app/your-trips/your-trips.component';
import { JacketService } from '../src/app/jacket.service';

export const LegacyModule = angular.module('passengr')
	.directive('appHelp', downgradeComponent({ component: HelpComponent }))
	.directive('appYourTrips', downgradeComponent({ component: YourTripsComponent }))
	.factory('JacketService', downgradeInjectable(JacketService));
