import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import angular from 'angular';
import { LegacyModule } from '../app/app';

if (environment.production) {
  enableProdMode();
}

setAngularJSGlobal(angular);

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((platformRef) => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.getElementById('legacy-app'), [ LegacyModule.name ])
  })
  .catch(err => console.error(err));
