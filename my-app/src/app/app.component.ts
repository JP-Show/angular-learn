import { AfterViewInit, Component, Inject } from '@angular/core';
import { CircleButtonComponent } from './circle-button/circle-button.component';
import { SwitchThemeButtonComponent } from './switch-theme-button/switch-theme-button.component';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  imports: [CircleButtonComponent, SwitchThemeButtonComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  counter:number = 0
  isChecked = false
  
  // eu poderia colocar algo para salvar no localstorage
  // a preferencia do light ou do dark mode
  constructor(@Inject(DOCUMENT) private document: Document, private storage: LocalStorageService){}
  
  ngAfterViewInit(): void {
      let mode:string | null = this.storage.get("preferredMode")
      if(mode != null)
        this.toggleTheme(mode === "darker" ? false : true)
  }

  handleTheme(isTrue:boolean){
    /*
    Se por acaso que quiser colocar um valor que altera quando clicar no botão.
    Mas preciso saber qual é o valor padrão do switch button, se por acaso tiver
    */
    if(isTrue){
      this.toggleTheme(isTrue)
      if(this.storage != null)
        this.storage.set("preferredMode", "lighter")
    }else{
      this.toggleTheme(isTrue)
      if(this.storage != null)
        this.storage.set("preferredMode", "darker")
    }
  }
  toggleTheme(isTrue:boolean){
    if(isTrue){
      this.document.body.classList.remove("darker")
      this.document.body.classList.add("lighter")
    }else{
      this.document.body.classList.remove("lighter")
      this.document.body.classList.add("darker")
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
