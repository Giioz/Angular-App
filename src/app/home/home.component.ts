import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  star = faStar
  constructor(public api:ApiService){}
  ngOnInit(): void {
    this.getFavRooms()
  }

  public favouriteRooms!:any;

  getFavRooms(){
    this.api.getRooms().subscribe((data:any) => {this.favouriteRooms = data.rooms, console.log(data)});
  }
  
}
