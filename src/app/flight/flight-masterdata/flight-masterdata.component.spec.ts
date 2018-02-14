import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightMasterdataComponent } from './flight-masterdata.component';

describe('FlightMasterdataComponent', () => {
  let component: FlightMasterdataComponent;
  let fixture: ComponentFixture<FlightMasterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightMasterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
