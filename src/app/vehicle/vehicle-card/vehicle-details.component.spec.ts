import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsComponent } from './vehicle-details.component';
import { vehicleMock } from '../../../test/mocks/vehicle';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    component.vehicle = vehicleMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
