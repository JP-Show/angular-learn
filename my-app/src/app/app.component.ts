import { Component } from '@angular/core';
import {MatFabButton} from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'

@Component({
  selector: 'app-root',
  imports: [MatFabButton, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
