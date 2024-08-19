import { Component, Input } from '@angular/core';
import { SharedModules } from '../../shared.module';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {
  @Input() imagen: string = '';
  ancho: number = 300;
  alto: number = 400;
  @Input() textoBoton: string = '';

  constructor() {}
}
