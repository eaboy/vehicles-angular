import { Component } from '@angular/core';
import { VehiclesService } from './vehicles.service';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, VehicleCardComponent],
  providers: [VehiclesService],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {

  vehicleList = this.vehiclesService.get();

  constructor(private vehiclesService: VehiclesService) { }


}
