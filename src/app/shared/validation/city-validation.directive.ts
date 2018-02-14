
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({ 
    selector: 'input[city]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidationDirective,
            multi: true
        }
    ]
})
export class CityValidationDirective implements Validator {
    constructor() { }

    @Input() city: string;

    validate(control: AbstractControl): any {

        let allowedCities = this.city.split(',');
        let value = control.value;

        if (allowedCities.indexOf(value) > -1) {
            return { };
        }

        return {
            city: {
                actual: value,
                allowed: allowedCities
            }
        }
    }
}