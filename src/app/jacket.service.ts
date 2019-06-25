import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JacketService {

  constructor(
    @Inject('GeolocationService') private geolocationService,
    private http: HttpClient
  ) {}

  isJacketNeeded() {
    return this.geolocationService.getCurrentPosition()
      .then(location => location.coords)
      .then(({latitude, longitude}) => this.http.get(`https://doineedajacket.com/a.php?snd=true&lat=${latitude}&lon=${longitude}`).toPromise())
      .then((response) => {
        const element = document.createElement('div');
        element.innerHTML = response.dinaj;
        return element.querySelector('.dinaj_h1').textContent === 'Yes';
      });
  }
}

