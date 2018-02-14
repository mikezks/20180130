import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'flight-masterdata',
  templateUrl: './flight-masterdata.component.html',
  styleUrls: ['./flight-masterdata.component.css']
})
export class FlightMasterdataComponent implements OnInit {
  @Input('group') public flightForm: FormGroup;

  constructor() { }

  ngOnInit() { 
    console.log(this.flightForm);
  }
}
