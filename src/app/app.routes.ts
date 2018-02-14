import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight/flight-search/flight-search.component';
import { ReactiveFlightSearchComponent } from './flight/reactive-flight-search/reactive-flight-search.component';
import { FlightTypeaheadComponent } from './flight/flight-typehead/flight-typeahead.component';

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
        component: FlightSearchComponent
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
        path: '**',
        redirectTo: 'home'
    }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);