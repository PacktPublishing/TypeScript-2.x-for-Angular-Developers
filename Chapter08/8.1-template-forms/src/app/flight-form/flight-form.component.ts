import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent implements OnInit {
  flightModel: Flight;
  cities:Array<string> = [
    'Lagos',
    'Mumbai',
    'New York',
    'London',
    'Nairobi'
  ];
  constructor() {
    this.flightModel = new Flight('', '', '', '', 0, '', 0, 0, '');
  }

  ngOnInit() {}

  handleSubmit() {
    console.log(this.flightModel);
  }
}
