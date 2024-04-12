import { Injectable } from '@angular/core';
import { ApiVehicle, Vehicle, VehicleDetails } from './vehicle.model';
import { apiBaseUrl } from '../shared/api';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';

@Injectable()
export class VehicleService {

  private vehicleListUrl = `${apiBaseUrl}/api/vehicles/`;

  constructor(private http: HttpClient) { }

  get() {
    return this.getList().pipe(switchMap(vehicles => {
      return forkJoin(vehicles.map(vehicle => this.getVehicleDetails(vehicle.apiUrl).pipe(catchError(() => of(null))))).pipe(map(vehiclesDetails => {
        return vehiclesDetails
          .map(vehicleDetails => this.mapApiVehicles(vehicles.find(vehicle => vehicle.id === vehicleDetails?.id) as ApiVehicle, vehicleDetails))
          .filter((vehicleDetails): vehicleDetails is Vehicle => !!vehicleDetails);
      }));
    }))
  }

  private getList() {
    return this.http.get<ApiVehicle[]>(this.vehicleListUrl);
  }

  private getVehicleDetails(vehicleDetailsEndpoint: string) {
    return this.http.get<VehicleDetails>(apiBaseUrl + vehicleDetailsEndpoint);
  }

  private mapApiVehicles(apiVehicle: ApiVehicle | undefined, vehicleDetails: VehicleDetails | null): Vehicle | null {
    if (!apiVehicle || !vehicleDetails) return null;
    const { meta, ...details } = vehicleDetails;
    return { ...apiVehicle, ...details, ...meta };
  }

}
