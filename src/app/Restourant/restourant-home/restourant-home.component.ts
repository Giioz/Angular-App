import { Component, OnInit } from '@angular/core';
import { RestourantApiService } from '../restourant-api.service';
import { BasketOpenerService } from '../basket-opener.service';
import Swal from 'sweetalert2';

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
  constructor(public api:RestourantApiService, public basket: BasketOpenerService){}

  public products!:Array<any>;
  public products1!:Array<any>;
  public productsLength!:number;
  public activeIndex!:any;
  public categories!:Array<any>;
  public basketLength!:number;


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
  addToCart(data:any){
    const body = {
        "quantity": 1,
        "price": data.price,
        "productId": data.id,
      }

    this.api.addItemToBasket(body).subscribe(data => {
      this.basketInfo()
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Successfully Added To Cart!"
      });
    });
  }
  basketInfo(){
    this.api.getBasketItems().subscribe((data:any) => {this.basketLength = data.length, this.sendSubject(), console.log(this.basketLength);
    });
    
  }
  sendSubject(){
    this.basket.subject.next(this.basketLength)
  }
}
