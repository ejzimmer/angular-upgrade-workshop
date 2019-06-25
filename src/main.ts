import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import angular from 'angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { LegacyModule } from '../app/legacy-app';

if (environment.production) {
  enableProdMode();
}

setAngularJSGlobal(angular);

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((platformRef) => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, [ LegacyModule.name ])
  })
  .catch(err => console.error(err));
