import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';
import { CanDeactivateComponent } from '../../shared/deactivation/can-deactivate.guard';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit, CanDeactivateComponent {
  id: string;
  showDetails: string;
  flight: Flight;
  errors: string;
  sender: Observer<boolean>;
  showWarning = false;

/*
  // Without Resolver
  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.showDetails = params['showDetails'];

        this.flightService.findById(this.id).subscribe(
          flight => { this.flight = flight; this.errors = ''; },
          err => { this.errors = 'Fehler beim Laden'; }
        );
      }
    );
  }
 */

  // With Resolver
  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });

    this.route.data.subscribe(data => {
      this.flight = data['flight'];
      console.log('router data from resolver');
    });
  }

  save() {
    this.flightService.save(this.flight).subscribe(
      flight => {
          this.flight = flight; 
          this.errors = 'Saving was successful!'; 
      },
      err => { this.errors = 'Error saving data'; }
    );
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  delete() {
    console.log('Delete logic can be implemented here.');
  }

  canDeactivate(): Observable<boolean> {
    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
      this.showWarning = true;
    });
  }
}