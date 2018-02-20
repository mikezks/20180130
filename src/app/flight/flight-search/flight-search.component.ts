import { FlightService } from '../services/flight.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from "../../entities/flight";
import { FlightEventService } from '../../basket/flight-event.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg';
  to: string = 'Graz';
  date: string = (new Date()).toISOString();
  flights: Flight[];
  //selectedFlight: Flight;

  basket: object = {
    '3': true,
    '4': false,
    '5': true
  };

  // private http: HttpClient;

  constructor(
      private flightService: FlightService,
      private flightEventService: FlightEventService) {
  }

  ngOnInit() {
  }

  selectFlightsForBasket() {
    for (let prop in this.basket) {
      if (this.basket[prop]) {
        const flightForBasket = this.flights.find(f => f.id.toString() === prop);
        if (flightForBasket) {
          this.flightEventService.flightSelected.next(flightForBasket);
        }
      }
    }
  }

  search(): void {
    console.log('search method');
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => {
          this.flights = flights;
          if (this.flights) {
            this.selectFlightsForBasket();
          }
        },
        err => { console.error('Error loading flights', err); }
      );
  }

  select(f: Flight, selected: boolean): void {
    //this.selectedFlight = f;
    this.basket[f.id] = selected;
    if (selected) {
      this.flightEventService.flightSelected.next(f);
    }
  }


}
