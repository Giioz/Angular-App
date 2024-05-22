import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {}

  getRooms(){
    return this.http.get("https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/3")
  }
}
