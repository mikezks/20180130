import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerMasterdataComponent } from './passenger-masterdata.component';

describe('PassengerMasterdataComponent', () => {
  let component: PassengerMasterdataComponent;
  let fixture: ComponentFixture<PassengerMasterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerMasterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
