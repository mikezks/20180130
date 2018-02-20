import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReactiveFlightSearchComponent } from './flight/reactive-flight-search/reactive-flight-search.component';
import { FlightTypeaheadComponent } from './flight/flight-typehead/flight-typeahead.component';
import { PassengerBookingComponent } from './passenger/passenger-booking/passenger-booking.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { BasketComponent } from './basket/basket.component';
import { CustomPreloadingStrategy } from './shared/preloading/custom-preloading-strategy';

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
        path: 'flight',
        loadChildren: './flight/flight.module#FlightModule',
        data: {
            preload: true
        }
    }, 
    /*{
        path: 'reactive-flight-search',
        component: ReactiveFlightSearchComponent,
    },
    {
        path: 'flight-typeahead',
        component: FlightTypeaheadComponent,
    }, */
    {
        path: 'passenger-booking',
        component: PassengerBookingComponent,
    },
    {
        path: 'basket',
        component: BasketComponent,
        outlet: 'aux'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const AppRouterModule = RouterModule.forRoot(
    APP_ROUTES,
    {
        //preloadingStrategy: PreloadAllModules
        preloadingStrategy: CustomPreloadingStrategy
    }
);
