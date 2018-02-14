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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlightModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
