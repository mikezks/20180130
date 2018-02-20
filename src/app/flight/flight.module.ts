import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './services/flight.service';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightTypeaheadComponent } from './flight-typehead/flight-typeahead.component';
import { FlightComponent } from './flight.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight.routes';
import { FlightResolver } from './flight-search/flight.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    SharedModule.forChild(),
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    ReactiveFlightSearchComponent,
    FlightTypeaheadComponent,
    FlightComponent,
    FlightEditComponent
],
  providers: [
    FlightResolver,
    FlightService
  ],
  exports: [
    FlightComponent,
    FlightSearchComponent,
    ReactiveFlightSearchComponent,
    FlightTypeaheadComponent
  ]
})
export class FlightModule { }
