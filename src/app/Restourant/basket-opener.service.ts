import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestourantApiService } from './restourant-api.service';

@Injectable({
  providedIn: 'root'
})
export class BasketOpenerService implements OnInit{

  constructor(public api :RestourantApiService){}
  ngOnInit(): void {
    this.getDefault()
  }
  public defaultLength!:number;
  public subject = new BehaviorSubject(this.defaultLength)

  getDefault(){
    this.api.getBasketItems().subscribe((data:any) => this.defaultLength = data.length)
  }
}
