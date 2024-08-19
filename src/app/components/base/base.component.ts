import { Component } from '@angular/core';
import { SharedModules } from '../../shared.module';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

}
