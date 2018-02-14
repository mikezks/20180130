import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight/flight-search/flight-search.component';
import { ReactiveFlightSearchComponent } from './flight/reactive-flight-search/reactive-flight-search.component';
import { FlightTypeaheadComponent } from './flight/flight-typehead/flight-typeahead.component';
import { PassengerBookingComponent } from './passenger/passenger-booking/passenger-booking.component';
import { AuthGuard } from './shared/auth/auth.guard';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: 'reactive-flight-search',
        component: ReactiveFlightSearchComponent,
    },
    {
        path: 'flight-typeahead',
        component: FlightTypeaheadComponent,
    },
    {
        path: 'passenger-booking',
        component: PassengerBookingComponent,
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
