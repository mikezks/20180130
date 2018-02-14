import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './services/flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightTypeaheadComponent } from './flight-typehead/flight-typeahead.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    ReactiveFlightSearchComponent,
    FlightTypeaheadComponent
],
  providers: [
    FlightService
  ],
  exports: [
    FlightSearchComponent,
    ReactiveFlightSearchComponent,
    FlightTypeaheadComponent
  ]
})
export class FlightModule { }
