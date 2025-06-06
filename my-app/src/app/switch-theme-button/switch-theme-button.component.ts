import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';


type Theme = 'lighter' | "darker"

@Component({
  selector: 'app-switch-theme-button',
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './switch-theme-button.component.html',
  styleUrl: './switch-theme-button.component.scss'
})
export class SwitchThemeButtonComponent extends FormsModule{
  //icons
  icon1: string = 'M12 15.5q1.45 0 2.475-1.025Q15.5 13.45 15.5 12q0-1.45-1.025-2.475Q13.45 8.5 12 8.5q-1.45 0-2.475 1.025Q8.5 10.55 8.5 12q0 1.45 1.025 2.475Q10.55 15.5 12 15.5Zm0 1.5q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.537 1.463T17 12q0 2.075-1.463 3.537T12 17ZM1.75 12.75q-.325 0-.538-.213Q1 12.325 1 12q0-.325.212-.537Q1.425 11.25 1.75 11.25h2.5q.325 0 .537.213Q5 11.675 5 12q0 .325-.213.537-.213.213-.537.213Zm18 0q-.325 0-.538-.213Q19 12.325 19 12q0-.325.212-.537.212-.213.538-.213h2.5q.325 0 .538.213Q23 11.675 23 12q0 .325-.212.537-.212.213-.538.213ZM12 5q-.325 0-.537-.213Q11.25 4.575 11.25 4.25v-2.5q0-.325.213-.538Q11.675 1 12 1q.325 0 .537.212 .213.212 .213.538v2.5q0 .325-.213.537Q12.325 5 12 5Zm0 18q-.325 0-.537-.212-.213-.212-.213-.538v-2.5q0-.325.213-.538Q11.675 19 12 19q.325 0 .537.212 .213.212 .213.538v2.5q0 .325-.213.538Q12.325 23 12 23ZM6 7.05l-1.425-1.4q-.225-.225-.213-.537.013-.312.213-.537.225-.225.537-.225t.537.225L7.05 6q.2.225 .2.525 0 .3-.2.5-.2.225-.513.225-.312 0-.537-.2Zm12.35 12.375L16.95 18q-.2-.225-.2-.538t.225-.512q.2-.225.5-.225t.525.225l1.425 1.4q.225.225 .212.538-.012.313-.212.538-.225.225-.538.225t-.538-.225ZM16.95 7.05q-.225-.225-.225-.525 0-.3.225-.525l1.4-1.425q.225-.225.538-.213.313 .013.538 .213.225 .225.225 .537t-.225.537L18 7.05q-.2.2-.512.2-.312 0-.538-.2ZM4.575 19.425q-.225-.225-.225-.538t.225-.538L6 16.95q.225-.225.525-.225.3 0 .525.225 .225.225 .225.525 0 .3-.225.525l-1.4 1.425q-.225.225-.537.212-.312-.012-.537-.212ZM12 12Z'
  icon2: string = 'M 12.00,21.00 C 9.50,21.00 7.38,20.12 5.62,18.38 3.88,16.62 3.00,14.50 3.00,12.00 3.00,9.50 3.88,7.38 5.62,5.62 7.38,3.88 9.50,3.00 12.00,3.00 12.23,3.00 12.46,3.01 12.69,3.02 12.91,3.04 13.13,3.07 13.35,3.10 12.67,3.58 12.12,4.21 11.71,4.99 11.30,5.76 11.10,6.60 11.10,7.50 11.10,9.00 11.62,10.27 12.68,11.32 13.73,12.38 15.00,12.90 16.50,12.90 17.42,12.90 18.26,12.70 19.03,12.29 19.79,11.88 20.42,11.33 20.90,10.65 20.93,10.87 20.96,11.09 20.98,11.31 20.99,11.54 21.00,11.77 21.00,12.00 21.00,14.50 20.12,16.62 18.38,18.38 16.62,20.12 14.50,21.00 12.00,21.00 Z M 12.00,19.00 C 13.47,19.00 14.78,18.60 15.95,17.79 17.12,16.98 17.97,15.92 18.50,14.62 18.17,14.71 17.83,14.78 17.50,14.82 17.17,14.88 16.83,14.90 16.50,14.90 14.45,14.90 12.70,14.18 11.26,12.74 9.82,11.30 9.10,9.55 9.10,7.50 9.10,7.17 9.12,6.83 9.18,6.50 9.22,6.17 9.29,5.83 9.38,5.50 8.08,6.03 7.02,6.88 6.21,8.05 5.40,9.22 5.00,10.53 5.00,12.00 5.00,13.93 5.68,15.58 7.05,16.95 8.42,18.32 10.07,19.00 12.00,19.00 Z M 11.75,12.25 11.75,12.25 11.75,12.25 11.75,12.25'

  @ViewChild('darkModeSwitch', { read: ElementRef })
  element: ElementRef | undefined;


  isChecked = false

  @Output()
  checkedChange = new EventEmitter<boolean>();

  constructor(private storage: LocalStorageService){
    super()
    const theme:string | null = this.storage.get("preferredMode")
      if(theme != null)
    this.isChecked = theme == "lighter" ? true : false
  }
  
  emitChecked(){
    
    this.checkedChange.emit(this.isChecked)
  }

  //changing the icon
  //Override
  ngAfterViewInit() {
    if (this.element){
      this.element.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon1);
      this.element.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon2 );
    }

  }
}