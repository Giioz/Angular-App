import { Component, OnInit } from '@angular/core';
import { RestourantApiService } from '../restourant-api.service';

@Component({
  selector: 'app-restourant-home',
  templateUrl: './restourant-home.component.html',
  styleUrl: './restourant-home.component.css'
})
export class RestourantHomeComponent implements OnInit{
  ngOnInit(): void {
    this.getProductsData()
  }
  constructor(public api:RestourantApiService){}

  public products!:Array<any>;
  public products1!:Array<any>;

  getProductsData(){
    this.api.getProducts().subscribe((data:any) => {this.products = data, this.products1 = data});
  }
}
