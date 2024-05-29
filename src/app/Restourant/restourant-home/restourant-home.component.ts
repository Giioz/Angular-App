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
    this.getCategories()
  }
  constructor(public api:RestourantApiService){}

  public products!:Array<any>;
  public products1!:Array<any>;
  public productsLength!:number;
  public activeIndex!:any;
  public categories!:Array<any>;



  getProductsData(){
    this.api.getProducts().subscribe((data:any) => {this.products = data, this.products1 = data});
    this.activeIndex = ''
  }
  // filter funcs 
  getFilteredProducts(id:any){
    this.api.getCategoryProduct(id).subscribe(data => this.storeProductData(data))
  }
  storeProductData(data:any){
    this.products = data.products
    this.productsLength = data.products.length
  }
  onFinalData(data:any){
    this.products = data
    this.productsLength = data.length
  }
  // categories funcs

  getCategories(){
    this.api.getCategories().subscribe((data:any) => this.categories = data)
  }
  setProducts(){
    this.getProductsData()
    this.activeIndex = ''
  }
  setActive(id:any){
    this.activeIndex = id;
  }
}
