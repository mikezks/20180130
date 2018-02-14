import { FlightService } from '../services/flight.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from "../../entities/flight";

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg';
  to: string = 'Graz';
  public date: string = (new Date()).toISOString();
  flights: Flight[];
  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  }

  // private http: HttpClient;

  constructor(private flightService: FlightService) { 
  }

  ngOnInit() {
  }

  search(): void {
    console.log('search method');
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => { this.flights = flights; },
        err => { console.error('Error loading flights', err); }
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }


}
