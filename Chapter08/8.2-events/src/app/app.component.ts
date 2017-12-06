import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  keyPressed = false;
  key = '';
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter <= 0 ? (this.counter = 0) : this.counter--;
  }
  showKey($event) {
    this.keyPressed = true;
    this.key = $event.key.toUpperCase();
    setTimeout(() => {
      this.keyPressed = false;
    }, 500)
  }
}
