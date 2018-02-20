import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Flight } from '../entities/flight';
import { FlightEventService } from './flight-event.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnDestroy {
  flights: Flight[] = [];
  sub: Subscription;

  constructor(flightEventService: FlightEventService) {

    this.sub = flightEventService.flightSelected.subscribe(
      (flight) => {
        this.flights.push(flight);
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
