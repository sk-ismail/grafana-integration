import { Component, OnInit } from '@angular/core';

import { data } from 'src/app/app.component';


@Component({
  selector: 'app-grafana-frames',
  templateUrl: './grafana-frames.component.html',
  styleUrls: ['./grafana-frames.component.css']
})
export class GrafanaFramesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deleteCard(i: number) {  

     data.splice(i,1)
   
    }  
  
  datagen=data;
}
