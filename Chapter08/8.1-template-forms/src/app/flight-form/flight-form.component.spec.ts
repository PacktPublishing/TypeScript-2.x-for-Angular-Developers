import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFormComponent } from './flight-form.component';

describe('FlightFormComponent', () => {
  let component: FlightFormComponent;
  let fixture: ComponentFixture<FlightFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
