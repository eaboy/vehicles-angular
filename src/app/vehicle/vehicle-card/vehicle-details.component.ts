import { Component, Input } from '@angular/core';
import { Emissions, Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [],
  template: `
    <article class="vehicle-details">
      <h4 class="vehicle-details__title">Vehicle details</h4>
      <div class="vehicle-details__info">
        <p>Name:</p>
        <p>{{ vehicle.name }}</p>
        <p>Body style:</p>
        <p>{{ vehicle.bodystyles.join(', ') }}</p>
        <p>Passengers:</p>
        <p>{{ vehicle.passengers }}</p>
        <p>Emissions:</p>
        <p>{{ getEmissionsInfo(vehicle.emissions) }}</p>
      </div>
    </article>
  `,
  styles: `
  .vehicle-details {
    padding: 10px;
    &__info {
      padding: 10px;
      margin-top: 15px;
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(4, auto);
      gap: 10px;
    }
    p:nth-child(odd) {
      font-weight: bold;
    }
  }

  `
})
export class VehicleDetailsComponent {

  @Input({ required: true }) vehicle!: Vehicle;

  getEmissionsInfo(emissions: Emissions): string {
    return emissions?.template?.replace('$value', emissions?.value?.toString()) || '';
  }

}
