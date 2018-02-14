import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Booking } from '../../entities/booking';

@Component({
  selector: 'passenger-booking',
  templateUrl: './passenger-booking.component.html',
  styleUrls: ['./passenger-booking.component.css']
})
export class PassengerBookingComponent implements OnInit {
  public passengerBookingForm: FormGroup;
  public step: number = 1;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.passengerBookingForm = this.fb.group({
          passenger: this.fb.group({
            firstname: ['Max', [Validators.required, Validators.minLength(2)]],
            lastname: ['Mustermann', [Validators.required, Validators.minLength(2)]],
          }),
          flights: this.fb.array([])
      });

      this.addFlightBooking();
  }

  initFlightBooking() {
      return this.fb.group({
          id: [''],
          from: [''],
          to: [''],
      });
  }

  addFlightBooking() {
      const control = <FormArray>this.passengerBookingForm.controls['flights'];
      const flightCtrl = this.initFlightBooking();
      control.push(flightCtrl);
  }

  delFlightBooking(index: number) {
      const control = <FormArray>this.passengerBookingForm.controls['flights'];
      control.removeAt(index);
  }

  save(passengerBookingForm: FormGroup) {
      console.log(passengerBookingForm.value);
  }
}
