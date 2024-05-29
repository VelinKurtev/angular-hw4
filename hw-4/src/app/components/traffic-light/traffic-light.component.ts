import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent implements OnInit {
  redColor: string = '';
  yellowColor: string = '';
  greenColor: string = '';
  activeColor: string = 'red';
  previousActive: string = '';

  ngOnInit(): void {
    this.redColor = 'red';
    this.previousActive = 'red';
    setInterval(() => {
      this.changeTrafficLight();
    }, 5000)
  }

  changeTrafficLight() {
    if (this.activeColor === 'red') {
      this.redColor = 'red';
      this.yellowColor = 'lightyellow';
      this.greenColor = 'lightgreen'

      this.previousActive = this.redColor;
      this.activeColor = 'yellow';
    } else if (this.activeColor === 'yellow') {
      this.redColor = 'lightcoral';
      this.yellowColor = 'yellow';
      this.greenColor = 'lightgreen';

      if (this.previousActive === 'red') {
        this.activeColor = 'green';
      } else {
        this.activeColor = 'red';
      }
      setTimeout(() => {
        this.changeTrafficLight();
      }, 2000)

    } else {
      this.redColor = 'lightcoral';
      this.yellowColor = 'lightyellow';
      this.greenColor = 'green';

      this.previousActive = this.greenColor;
      this.activeColor = 'yellow';
    }
  }
}
