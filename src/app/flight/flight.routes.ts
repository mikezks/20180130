import { FlightComponent } from './flight.component';
import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { ReactiveFlightSearchComponent } from './reactive-flight-search/reactive-flight-search.component';
import { FlightTypeaheadComponent } from './flight-typehead/flight-typeahead.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { CanDeactivateGuard } from '../shared/deactivation/can-deactivate.guard';
import { FlightResolver } from './flight-search/flight.resolver';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: 'flight-search',
            component: FlightSearchComponent
        },
        {
            path: 'flight-edit/:id',
            component: FlightEditComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
                flight: FlightResolver
            }
        },
        {
            path: 'reactive-flight-search',
            component: ReactiveFlightSearchComponent,
        },
        {
            path: 'flight-typeahead',
            component: FlightTypeaheadComponent,
        }
    ]
  }
]