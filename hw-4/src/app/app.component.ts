import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent, CommonModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw-4';
  subscription!: Subscription;
  brokenLights: { [key: number]: boolean } = {};

  breakdown() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    for (let i = 1; i <= 4; i++) {
      this.brokenLights[i] = true;

      setTimeout(() => {
        this.brokenLights[i] = false;
      }, 10000);
    }
  }

  isBroken(key: number): boolean {
    return this.brokenLights[key] || false;
  }
}
