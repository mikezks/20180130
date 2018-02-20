import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';

import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';

@Injectable()
export class FlightResolver implements Resolve<Flight> {

  constructor(private flightService: FlightService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight>  {
    const id = route.params['id'];
    return this.flightService.findById(id).pipe(delay(3000)); // <-- delay!;
  }
}
