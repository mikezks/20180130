import { FlightService } from '../services/flight.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from "../../entities/flight";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'reactive-flight-search',
  templateUrl: './reactive-flight-search.component.html',
  styleUrls: ['./reactive-flight-search.component.css']
})
export class ReactiveFlightSearchComponent implements OnInit {

  public selectedFlight: Flight;
  public flights: Flight[] = [];
  public filter: FormGroup;
  public afterSearch$ = new Subject<Flight[]>();
  public dynamicForm = false;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  }

  public formMetadata = [
    { name: 'from', label: 'Airport of departure'},
    { name: 'to', label: 'Airport of destination'}
  ];


  constructor(private fb: FormBuilder, private flightService: FlightService) { 
    this.filter = fb.group({
          from: [ 'Graz',
                  [ Validators.required,
                    Validators.minLength(3),
                    (c: AbstractControl): any => {
                        if (c.value !== 'Graz' && c.value !== 'Hamburg') {
                            return {
                                cityGrazHamburgInlineLambdaFunction: true
                            };
                        }
                        return {};
                    }
                  ]
                ],
          to: ['Hamburg']
      });

      this.filter.valueChanges.subscribe((changes) => {
          console.debug('Formular hat sich geändert', changes);
      });

  }

  ngOnInit() {
  }

  public search(): void {
    const value = this.filter.value;

    if (!value.from || !value.to) {
      this.afterSearch$.error('to and from expected!');
      return;
    }

    this
      .flightService
      .find(value.from, value.to)
      .subscribe(
          (flights: Flight[]) => {
              this.flights = flights;
              this.afterSearch$.next(this.flights);
          },
          (errResponse) => {
              this.afterSearch$.error(errResponse);
              console.error('Fehler beim Laden', errResponse);
          }
      );
  }

  public select(f: Flight): void {
    this.selectedFlight = f;
  }
}
