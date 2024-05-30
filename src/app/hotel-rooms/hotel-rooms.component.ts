import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrl: './hotel-rooms.component.css'
})
export class HotelRoomsComponent {
  constructor(public route: ActivatedRoute, public api:ApiService){}
  ngOnInit(): void {
    this.getId()
  }

  public rooms!:Array<any>;
  public hotelName!:string;

  getId(){
    this.route.params.subscribe((data:any) => this.getRoomsByHotel(data.id));
  }
  getRoomsByHotel(id:number){
    this.api.getHotelById(id).subscribe((data:any) => {this.rooms = data.rooms, this.hotelName = data.name});
  }
}
