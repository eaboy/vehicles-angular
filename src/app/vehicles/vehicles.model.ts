export interface Vehicle extends ApiVehicle {
  description: string;
  price: string;
  passengers: number;
  drivetrain: string[];
  bodystyles: string[];
  emissions: Emissions;
}

export interface ApiVehicle {
  id: string;
  name: string;
  modelYear: string;
  apiUrl: string;
  media: Media[];
}

export interface Media {
  name: string;
  url: string;
}

export interface VehicleDetails {
  id: string;
  description: string;
  price: string;
  meta: Meta;
}

export interface Meta {
  passengers: number;
  drivetrain: string[];
  bodystyles: string[];
  emissions: Emissions;
}

export interface Emissions {
  template: string;
  value: number;
}