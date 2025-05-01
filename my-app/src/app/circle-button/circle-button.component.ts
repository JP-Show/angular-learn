import { Component, Input, input } from '@angular/core';
import {MatFabButton} from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'

@Component({
  selector: 'app-circle-button',
  imports: [MatFabButton, MatIcon],
  templateUrl: './circle-button.component.html',
  styleUrl: './circle-button.component.scss'
})
export class CircleButtonComponent {
  @Input() 
  icon:string = '';

}
