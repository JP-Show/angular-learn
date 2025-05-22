import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage | null
  private isBrowser: boolean

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId)
    if(this.isBrowser)
      this.storage = window.localStorage
    else{
      this.storage = null;
    }
   }

   set(key:string, value:string){
    if(this.storage != null)
      this.storage.setItem(key, value)
   }
   get(key:string):string | null{
    return this.storage ? this.storage.getItem(key) : null
   }
}
