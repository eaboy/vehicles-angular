import { Component, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  constructor(private element: ElementRef) { }

  close() {
    this.element.nativeElement.remove();
  }

}
