import { ApplicationRef, ComponentRef, EnvironmentInjector, Inject, Injectable, Renderer2, RendererFactory2, Type, createComponent } from '@angular/core';
import { ModalComponent } from './modal.component';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalComponent!: ComponentRef<ModalComponent>;
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(
    private injector: EnvironmentInjector,
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2,
    private appRef: ApplicationRef
  ) { }

  open(component: Type<unknown>) {
    const componentToRender = createComponent(component, { environmentInjector: this.injector });
    this.modalComponent = createComponent(ModalComponent, { environmentInjector: this.injector, projectableNodes: [[componentToRender.location.nativeElement]] });
    this.renderer.appendChild(this.document.body, this.modalComponent.location.nativeElement);
    this.appRef.attachView(componentToRender.hostView);
    this.appRef.attachView(this.modalComponent.hostView);
    return {
      close: this.modalComponent.instance.close
    }
  }

}
