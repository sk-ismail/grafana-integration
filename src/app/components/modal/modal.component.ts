import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class popUpModalComponent implements OnInit {
  // @Input () id : any;
  @Output () dataValues=new EventEmitter<object>();
  constructor(public dialogRef: MatDialogRef<popUpModalComponent>) { }
  gname: string='';
  gurl: string='';
  gid: number=1;
  
  ngOnInit(): void {
  }

  submitForm(){

      if(this.gname===""){
        alert('enter the data');
      }
      else if(this.gurl===""){
        alert('enter the data')
      }
      else{
        this.dataValues.emit({ name: this.gname, url: this.gurl})
      }
      
    
  }


 
}
