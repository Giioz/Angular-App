import { Component, DoCheck, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { BasketOpenerService } from '../Restourant/basket-opener.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements DoCheck{
  ngDoCheck(): void {
    this.getUrl()
    this.getBasketLength()
  }
  constructor(public router:Router, public basket: BasketOpenerService){}
  currentUrl!:string;
  public basketLength!:string;
  getUrl(){
    this.currentUrl = this.router.url;
  }
  getBasketLength(){
    this.basket.subject.subscribe((data:any) => this.basketLength = data);
  }
}
