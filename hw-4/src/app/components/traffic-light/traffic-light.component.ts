import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule, CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent implements OnInit {
  @Input() type: string = '';
  @Input() startColor: string = '';
  redColor: string = '';
  yellowColor: string = '';
  greenColor: string = '';
  activeColor: string = '';
  previousActive: string = '';
  crossingAvailable: boolean = true;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activeColor = this.startColor;
    this.changeTrafficLight();
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
      this.crossingAvailable = false;
    } else if (this.activeColor === 'yellow') {
      this.redColor = 'lightcoral';
      this.yellowColor = 'yellow';
      this.greenColor = 'lightgreen';

      if (this.previousActive === 'red') {
        this.activeColor = 'green';
      } else {
        this.activeColor = 'red';
      }
      this.crossingAvailable = true;

      setTimeout(() => {
        this.changeTrafficLight();
      }, 2000)

    } else {
      this.redColor = 'lightcoral';
      this.yellowColor = 'lightyellow';
      this.greenColor = 'green';

      this.previousActive = this.greenColor;
      this.activeColor = 'yellow';
      this.crossingAvailable = true;
    }
  }

  cross() {
    if (this.yellowColor === 'yellow') {
      this._snackBar.open('Improper Crossing', 'Close', {
        duration: 2000
      });
    }
  }
}
