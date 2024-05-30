import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  styleUrl: './booked-rooms.component.css'
})
export class BookedRoomsComponent implements OnInit{
  ngOnInit(): void {
    this.getBookedRooms()
  }
  constructor(public api:ApiService){}

  public bookedRooms!:Array<any>

  delete(book:number){
    
    this.api.deleteBooking(book).subscribe(
      data => {
        data
    },
    error => {
      this.getBookedRooms()
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
        title: "Booking Successfully Removed"
      });
    }
  )
  }

  getBookedRooms(){
    this.api.getBooked().subscribe((data:any) => {this.bookedRooms = data, console.log(123)})
  }

}
