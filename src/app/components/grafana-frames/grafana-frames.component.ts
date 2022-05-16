import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { data } from 'src/app/app.component';


@Component({
  selector: 'app-grafana-frames',
  templateUrl: './grafana-frames.component.html',
  styleUrls: ['./grafana-frames.component.css']
})
export class GrafanaFramesComponent implements OnInit {
  // @Input () item :any;
  @Output() deleteItem = new EventEmitter<any>(); 
  constructor() { }

  ngOnInit(): void {
  }
  deleteCard(val: any) {  

    this.deleteItem.emit(val);
  
    }  
  // data1=localStorage.getItem("datairfan")
  
  datagen=data;
}
