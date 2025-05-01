import { Component, Inject } from '@angular/core';
import { CircleButtonComponent } from './circle-button/circle-button.component';
import { SwitchThemeButtonComponent } from './switch-theme-button/switch-theme-button.component';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CircleButtonComponent, SwitchThemeButtonComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter:number = 0;

  constructor(@Inject(DOCUMENT) private document: Document){}

  handleTheme(){

    console.log(this.document.body.classList.contains("lighter"))

    if(this.document.body.classList.contains("lighter")){
      this.document.body.classList.toggle("darker")
      this.document.body.classList.toggle("lighter")
    }else{
      this.document.body.classList.toggle("lighter")
      this.document.body.classList.toggle("darker")
    }
    
  }

  handleIncressValue(){
    this.counter++
  }
  handleDecressValue(){
    this.counter--
  }
  handleReset(){
    this.counter = 0;
  }
}
