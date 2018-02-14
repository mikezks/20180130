import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityPipe } from './pipes/city.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';
import { AsyncCityValidationDirective } from './validation/async-city-validation.directive';
import { RoundTripValidationDirective } from './validation/round-trip-validation.directive';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

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
export class SharedModule {

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        }
      ]
    }
  }
}
