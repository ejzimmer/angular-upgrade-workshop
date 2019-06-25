import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, Input, ElementRef, Injector } from '@angular/core';
import { UpgradeModule, UpgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { YourTripsComponent } from './your-trips/your-trips.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@Directive({selector: 'app-user-rating'})
export class UserRatingComponentWrapper extends UpgradeComponent {
  @Input() stars: number;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('userRating', elementRef, injector);
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    YourTripsComponent,
    UserRatingComponentWrapper
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'TripHistoryService',
      useFactory: tripHistoryServiceFactory,
      deps: ['$injector']
    },
    {
      provide: 'GeolocationService',
      useFactory: geolocationServiceFactory,
      deps: ['$injector']
    }
  ],
  entryComponents: [HelpComponent, YourTripsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  ngDoBootstrap() {}
}

export function tripHistoryServiceFactory(i: any) {
  return i.get('TripHistoryService');
}
export function geolocationServiceFactory(i: any) {
  return i.get('GeolocationService');
}
