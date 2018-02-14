import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'passenger-masterdata',
  templateUrl: './passenger-masterdata.component.html',
  styleUrls: ['./passenger-masterdata.component.css']
})
export class PassengerMasterdataComponent implements OnInit {
  @Input('group') public passengerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.passengerForm);
  }

}
