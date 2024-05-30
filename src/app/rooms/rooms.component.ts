import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  constructor(public route: ActivatedRoute, public api:ApiService){}
  ngOnInit(): void {
    this.getAllRoom()
  }

  public rooms!:Array<any>;

  getAllRoom(){
    this.api.getAllRoom().subscribe((data:any) => this.rooms = data);
  }
  onFinalData(data:any){
    this.rooms = data
  }
  
}
