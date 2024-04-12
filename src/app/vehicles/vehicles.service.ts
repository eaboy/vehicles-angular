import { Injectable } from '@angular/core';
import { Vehicle } from './vehicles.model';
import { apiBaseUrl } from '../shared/api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VehiclesService {

  private vehicleListUrl = `${apiBaseUrl}/api/vehicles/`;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Vehicle[]>(this.vehicleListUrl);
  }
}
