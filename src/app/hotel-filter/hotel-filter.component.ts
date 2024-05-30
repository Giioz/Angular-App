import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrl: './hotel-filter.component.css'
})
export class HotelFilterComponent {

  @Output() finalData:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('range', {static:true}) range!:ElementRef;

  constructor(public api:ApiService){}

  public rangeVal?:string = '1000';
  public selectVal:any = null;


  // range styles funcs

  onRangeChange(event:any){
    this.rangeVal = event.target.value
    this.setGradient(event)
  }
  setGradient(event:any){
    let value = event.target.value / 10 
    console.log(value);
    this.range.nativeElement.style.background = `linear-gradient(to right, #86CCD5 0%, #86CCD5 ${value}%, lime ${value}%, white 100%)`
  }

  // post body 

  filter(value:string){
    if(value == '1' || value == '2' || value == '3'){
      this.selectVal = value
    }
    console.log(this.selectVal);
    this.api.filterRoom({
      "roomTypeId": this.selectVal,
      "priceTo": this.rangeVal,
    }).subscribe(data => this.finalData.emit(data));
  }
  reset(selectElement: HTMLSelectElement){
    this.selectVal = null;
    selectElement.value = ''
    this.rangeVal = '1000';
    this.range.nativeElement.style.background = `linear-gradient(to right, #86CCD5 0%, #86CCD5 50%, #86CCD5 100%, white 100%)`
    
  }

}
