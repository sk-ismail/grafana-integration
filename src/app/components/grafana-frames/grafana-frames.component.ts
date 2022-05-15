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
    let checking=()=>{
      // console.log(JSON.parse(this.data1));
      console.log(this.datagen)
    }
    checking()
  }
  deleteCard(val: any) {  
    console.log("val",val)
    this.deleteItem.emit(val);
    console.log(this.deleteItem)  
    }  
  // data1=localStorage.getItem("datairfan")
  
  datagen=data;
}
