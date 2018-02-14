import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFlightSearchComponent } from './reactive-flight-search.component';

describe('ReactiveFlightSearchComponent', () => {
  let component: ReactiveFlightSearchComponent;
  let fixture: ComponentFixture<ReactiveFlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFlightSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
