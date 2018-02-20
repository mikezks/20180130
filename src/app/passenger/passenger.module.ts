import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerBookingComponent } from './passenger-booking/passenger-booking.component';
import { PassengerMasterdataComponent } from './passenger-masterdata/passenger-masterdata.component';
import { FlightModule } from '../flight/flight.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightMasterdataComponent } from './flight-masterdata/flight-masterdata.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PassengerBookingComponent,
    PassengerMasterdataComponent,
    FlightMasterdataComponent
  ]
})
export class PassengerModule { }
