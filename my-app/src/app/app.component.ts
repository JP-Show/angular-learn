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
  isChecked = false

  // eu poderia colocar algo para salvar no localstorage
  // a preferencia do light ou do dark mode
  constructor(@Inject(DOCUMENT) private document: Document){

    // let mode:string | null = localStorage.getItem("preferredMode")
    // this.document.body.classList.toggle("")
  }

  handleTheme(isTrue:boolean){

    /*
    Se por acaso que quiser colocar um valor que altera quando clicar no botão.
    Mas preciso saber qual é o valor padrão do switch button, se por acaso tiver
    */

    if(isTrue){
      this.document.body.classList.toggle("darker")
      this.document.body.classList.toggle("lighter")
      localStorage.setItem("preferredMode", "darker")
    }else{
      this.document.body.classList.toggle("lighter")
      this.document.body.classList.toggle("darker")
      localStorage.setItem("preferredMode", "lighter")
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
