import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RoomDetails } from '../details/details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{
  ngOnInit(): void {
    this.getHotels()
  }
  constructor(public api:ApiService, public route:Router){}

  public hotels:any;

  getHotels(){
    this.api.getHotels().subscribe(data => {console.log(data), this.hotels = data});
  }
  viewRooms(hotelId:number){
    this.route.navigate([`/rooms/${hotelId}`])
  }
}
