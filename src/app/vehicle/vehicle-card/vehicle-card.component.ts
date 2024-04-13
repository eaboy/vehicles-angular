import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { ModalService } from '../../shared/modal/modal.service';
import { VehicleDetailsComponent } from './vehicle-details.component';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleCardComponent implements OnInit {

  mobileImgSrc: string = '';
  desktopImgSrc: string = '';

  @Input({ required: true }) vehicle!: Vehicle;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.setImgSrcs();
  }

  openDetails() {
    this.modalService.open(VehicleDetailsComponent, { modalLabel: 'Vehicle details modal', inputs: { vehicle: this.vehicle } });
  }

  private setImgSrcs() {
    const { media } = this.vehicle;
    this.mobileImgSrc = `assets${media.find(img => img.url.includes('1x1'))?.url}` || '';
    this.desktopImgSrc = `assets${media.find(img => img.url.includes('16x9'))?.url}` || '';
  }
}
