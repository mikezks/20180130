import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerBookingComponent } from './passenger-booking.component';

describe('PassengerBookingComponent', () => {
  let component: PassengerBookingComponent;
  let fixture: ComponentFixture<PassengerBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
