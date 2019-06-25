import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTripsComponent } from './your-trips.component';

describe('YourTripsComponent', () => {
  let component: YourTripsComponent;
  let fixture: ComponentFixture<YourTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
