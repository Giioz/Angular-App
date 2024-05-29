import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit{

  ngOnInit(): void {
    this.loader.loadingToggler.subscribe(data => {
      this.isLoading = data
    })
  }
  constructor(public loader: LoaderService){}
  
  public isLoading:boolean = false;
}
