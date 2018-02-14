import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BASE_URL } from './app.token';
import { FlightModule } from './flight/flight.module';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PassengerModule } from './passenger/passenger.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './shared/auth/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    FlightModule,
    AppRouterModule,
    PassengerModule,
    OAuthModule.forRoot(),
    SharedModule.forRoot(),

  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at' },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
