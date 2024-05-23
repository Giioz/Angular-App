import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface RoomDetails {
  id:number,
  name:boolean,
  hotelId:number,
  pricePerNight:number,
  available:boolean,
  bookedDates:[],
  images:Image[]
  roomTypeId:number,
  maximumGuests:number,
}
interface Image {
  id:number;
  source: string;
  roomId:string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  constructor(public route: ActivatedRoute, public api: ApiService){}

  ngOnInit(): void {
    this.getId()
  }
  
  public roomDetails!:RoomDetails;
  bookingForm = new FormGroup({
    checkIn: new FormControl('', Validators.required),
    checkOut: new FormControl('', Validators.required),
    customerName: new FormControl('', Validators.required),
    customerPhone: new FormControl('', Validators.required),
  })


  getId(){
    this.route.params.subscribe((data:any) => this.getRoomInfo(data.id));
  }
  getRoomInfo(id:string){
    this.api.getRoomById(id).subscribe((data:RoomDetails) =>  {this.roomDetails = data, console.log(this.roomDetails)})
  }
  bookRoom(event:Event){
    event.preventDefault();
    console.log(this.bookingForm.invalid);
    
  }
}
