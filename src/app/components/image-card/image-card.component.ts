import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent {
  @Input() header = "Solución Contable";
  @Input() subHeader = "Cra. Florencia Tassano";
  @Input() imagen = "../../../assets/estudio-contable.jpg";
  @Input() boton = { metodo: 'verSolucionContable', texto: 'Más' };
  @Output() metodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  metodoExterno() {
    this.metodo.emit(this.boton.metodo);
  }
}
