import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements DoCheck{
  ngDoCheck(): void {
    this.getUrl()
  }
  constructor(public router:Router){}
  currentUrl!:string;

  getUrl(){
    this.currentUrl = this.router.url;
  }
}
