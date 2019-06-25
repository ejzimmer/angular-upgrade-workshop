import './app.js';
import './legacy-imports.js';
import { downgradeComponent } from '@angular/upgrade/static';

import { HelpComponent } from '../src/app/help/help.component';

export const LegacyModule = angular.module('passengr')
	.directive('appHelp', downgradeComponent({ component: HelpComponent }));
