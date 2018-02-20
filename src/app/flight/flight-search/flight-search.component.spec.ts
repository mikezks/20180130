import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlightSearchComponent } from './flight-search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../services/flight.service';
import { FlightEventService } from '../../basket/flight-event.service';
import { Flight } from '../../entities/flight';
import { Observable } from 'rxjs/Observable';

let fixture: ComponentFixture<FlightSearchComponent>;
const flightServiceStub = {
    flights: [],
    find: () => {
    }
};

const flightEventServiceStub = {
    flightSelected: undefined
};

describe('flight-search.component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [FlightSearchComponent],
            providers: [
                { provide: FlightService, useValue: flightServiceStub },
                { provide: FlightEventService, useValue: flightEventServiceStub },
            ],
            imports: [
                FormsModule
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

    }));

    it('should not have any flights defined initially', () => {
        fixture = TestBed.createComponent(FlightSearchComponent);
        const comp = fixture.componentInstance;

        expect(comp.flights).toBeUndefined();
    });
});
