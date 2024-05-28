import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDetails } from './details/details.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {}

  getRooms(){
    return this.http.get("https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/3")
  }
  getRoomById(id:string): Observable<RoomDetails>{
    return this.http.get<RoomDetails>(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }
  postRoom(body:object){
    return this.http.post("https://hotelbooking.stepprojects.ge/api/Booking", body)
  }
}
