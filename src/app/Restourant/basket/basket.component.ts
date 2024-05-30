import { Component, OnInit } from '@angular/core';
import { RestourantApiService } from '../restourant-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit {
  ngOnInit(): void {
    this.getBasketItems()
  }
  constructor(public api:RestourantApiService){}

  public basketItems!:Array<any>
  public totalPrice!:number;
  public cupon!:string;
  public cuponUsed:boolean = false
  
  getBasketItems(){
    this.api.getBasketItems().subscribe((data:any) => {
      this.basketItems = data

      let tempPrice = data.map((item:any) => {
        return item.product.price * item.quantity
      })

      let totalPrice = tempPrice.reduce((prev:number, current: number) => {
        return prev + current
      })

      this.totalPrice = totalPrice
    });
  }

  increaseQuantity(product:any){
    if(product.quantity < 0){
      product.quantity = 0
    }

    product.quantity++
    const updateBasket = {
      "quantity": product.quantity,
      "price": product.price,
      "productId": product.product.id
    }
    this.api.updateBasket(updateBasket).subscribe(data => this.getBasketItems());
  }

  decreaseQuantity(product:any){
    if(product.quantity <= 1){
      return
    }
    product.quantity--
    const updateBasket = {
      "quantity": product.quantity,
      "price": product.price,
      "productId": product.product.id
    }
    this.api.updateBasket(updateBasket).subscribe(data => this.getBasketItems());
  }
  
  deleteBtn(id:number){
    this.api.deleteFromBasket(id).subscribe(
      data => this.getBasketItems());
  }

  checkCoupon(){
    const couponList: Array<{ [key: string]: number }> = [
      {"sale50": 50},
      {"10discount": 10},

    ]
    if(!this.cuponUsed){
      let list = couponList.forEach(item => {
        for(let key in item){
            if(this.cupon == key){
              console.log("daemtxva",item[key]);
              this.totalPrice -= item[key]
              this.cuponUsed = true
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
                title: `Coupon Successfully Activated -${item[key]}$`
              });
            }
            else {
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
                icon: "error",
                title: `Incorrect Coupon`
              });
            }        
        }
      })
  }
  else {
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
      icon: "error",
      title: `You Can Activate Coupon Only Once`
    });
  }
  }
}
