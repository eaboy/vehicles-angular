import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCardComponent } from './vehicle-card.component';
import { vehicleMock } from '../../../test/mocks/vehicle';

describe('VehicleCardComponent', () => {
  let component: VehicleCardComponent;
  let fixture: ComponentFixture<VehicleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VehicleCardComponent);
    component = fixture.componentInstance;
    component.vehicle = vehicleMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
