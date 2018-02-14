import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerBookingComponent } from './passenger-booking/passenger-booking.component';
import { PassengerMasterdataComponent } from './passenger-masterdata/passenger-masterdata.component';
import { FlightModule } from '../flight/flight.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlightModule,
    ReactiveFormsModule
  ],
  declarations: [
    PassengerBookingComponent,
    PassengerMasterdataComponent
  ]
})
export class PassengerModule { }
