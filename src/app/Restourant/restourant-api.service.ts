import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestourantApiService {

  constructor(public http: HttpClient) { }


  getProducts(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }
  getCategories(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }
  getCategoryProduct(id:any){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)  
  }
  filterProduct(data:any){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${data.vegetarian}&nuts=${data.nuts}&spiciness=${data.spiceness}`)
  }
  addToBasket(body:any){
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body)
  }
  getBasketItems(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }
  deleteFromBasket(id:number){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
  updateBasket(body:any){
    return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
  }
  addItemToBasket(body:any){
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body)
  }
}
