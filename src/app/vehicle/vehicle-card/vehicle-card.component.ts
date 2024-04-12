import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleCardComponent implements OnInit {

  mobileImgSrc: string = '';
  desktopImgSrc: string = '';

  @Input({ required: true }) vehicle!: Vehicle;

  constructor() { }

  ngOnInit(): void {
    this.setImgSrcs();
  }

  private setImgSrcs() {
    const { media } = this.vehicle;
    this.mobileImgSrc = `assets${media.find(img => img.url.includes('1x1'))?.url}` || '';
    this.desktopImgSrc = `assets${media.find(img => img.url.includes('16x9'))?.url}` || '';
  }
}
