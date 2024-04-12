import { Component } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, VehicleCardComponent],
  providers: [VehicleService],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent {

  vehicleList = this.vehiclesService.get();

  constructor(private vehiclesService: VehicleService) { }

}
