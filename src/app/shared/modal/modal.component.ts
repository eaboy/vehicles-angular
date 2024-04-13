import { Component, ElementRef, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  closingModal = false;
  private closingModalAnimationDuration = 250;

  @Input() modalLabel: string = '';

  constructor(private element: ElementRef) { }

  close() {
    this.closingModal = true;
    setTimeout(() => {
      this.element.nativeElement.remove();
      this.closingModal = false;
    }, this.closingModalAnimationDuration);
  }

}
