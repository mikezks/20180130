import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityPipe } from './pipes/city.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';
import { AsyncCityValidationDirective } from './validation/async-city-validation.directive';
import { RoundTripValidationDirective } from './validation/round-trip-validation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    CityValidationDirective,
    RoundTripValidationDirective,
    AsyncCityValidationDirective
  ],
  providers: [],
  exports: [
    CityPipe,
    CityValidationDirective,
    RoundTripValidationDirective,
    AsyncCityValidationDirective
  ]
})
export class SharedModule { }
