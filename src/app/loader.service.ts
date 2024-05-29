import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  public loadingToggler: BehaviorSubject<boolean> = new BehaviorSubject(false)

  loadingOn(){
    this.loadingToggler.next(true)
  }
  loadingOff(){
    this.loadingToggler.next(false)
  }

}
