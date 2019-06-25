import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { YourTripsComponent } from './your-trips/your-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    YourTripsComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    {
      provide: 'TripHistoryService',
      useFactory: tripHistoryServiceFactory,
      deps: ['$injector']
    }
  ],
  entryComponents: [HelpComponent, YourTripsComponent]
})
export class AppModule { 
  ngDoBootstrap() {}
}

export function tripHistoryServiceFactory(i: any) {
  return i.get('TripHistoryService');
}
