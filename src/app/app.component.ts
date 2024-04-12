import { Component } from '@angular/core';
import { VehiclesComponent } from './vehicles/vehicles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehiclesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
