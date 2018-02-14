import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { Observable } from "rxjs/Observable";

import { FlightService } from "../../flight/services/flight.service";

@Directive({ 
    selector: 'input[asyncCity]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncCityValidationDirective,
            multi: true
        }
    ]
})
export class AsyncCityValidationDirective implements Validator {
    constructor(private flightService: FlightService) { }

    validate(control: AbstractControl): Observable<any> {
      
        return this
            .flightService
            .find(control.value, '') // exists
            .map(flights => {
                if (flights.length > 0) {
                    return {}
                }
                else {
                    return { asyncCity: true }
                }
            })
            .delay(4000);
    }
}