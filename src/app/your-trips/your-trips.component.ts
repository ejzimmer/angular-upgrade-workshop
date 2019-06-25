import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-your-trips',
  templateUrl: './your-trips.component.html',
  styleUrls: ['./your-trips.component.scss']
})
export class YourTripsComponent implements OnInit {
  trips: Promise<any>;

  constructor(@Inject('TripHistoryService') private tripHistoryService: any){ }

  ngOnInit() {
    this.trips = this.tripHistoryService.getTrips();
  }

}
