import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { RestourantApiService } from '../restourant-api.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.css'
})
export class FilterSectionComponent {
  constructor(public api:RestourantApiService){}
  
  public rangeVal?:any = '';
  public isNuts?: any = '';
  public isVegetarian?: any = '';
  data:any;
  @Output() finalData:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('range', {static:true}) range!:ElementRef;



  
  onRangeChange(event:any){
    this.rangeVal = event.target.value
    this.testlog(event)
  }
  testlog(event:any){
    let value = event.target.value * 25 
    this.range.nativeElement.style.background = `linear-gradient(to right, red 0%, red ${value}%, #fff ${value}%, white 100%)`
  }

  isNutsChecked(event:any){
      this.isNuts = event.target.checked
      if(event.target.checked == false){
        this.isNuts = ''
      }
  }
  isVegetarianChecked(event:any){
      this.isVegetarian = event.target.checked
      if(event.target.checked == false){
        this.isVegetarian = ''
      }
  }
  reset(){
    this.rangeVal = '',
    this.isNuts = '',
    this.isVegetarian = ''
    this.range.nativeElement.style.background = `linear-gradient(to right, red 0%, red 50%, #fff 50%, white 100%)`
  }
  submit(){
    this.api.filterProduct({
      spiceness: this.rangeVal,
      nuts: this.isNuts,
      vegetarian: this.isVegetarian
    }).subscribe((data: any) => this.emitData(data));
    
  }
  emitData(data:any){
    this.finalData.emit(data)
  }



}
