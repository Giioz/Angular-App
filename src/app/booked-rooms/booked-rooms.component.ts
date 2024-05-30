import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  styleUrl: './booked-rooms.component.css'
})
export class BookedRoomsComponent implements OnInit, DoCheck{
  ngOnInit(): void {
    this.getBookedRooms()
  }
  ngDoCheck(): void {
    this.getBookedRooms()
  }
  constructor(public api:ApiService){}

  public bookedRooms!:Array<any>


  getBookedRooms(){
    this.api.getBooked().subscribe((data:any) => {this.bookedRooms = data, console.log(this.bookedRooms);})
  }
  delete(book:number){
    this.api.deleteBooking(book).subscribe(data => console.log(data));
    
  }
}
