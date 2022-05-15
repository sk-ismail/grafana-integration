import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class popUpModalComponent implements OnInit {
 
  formArray:FormArray=new FormArray([]);
  isOpen = false;
  // @Input () id : any;
  @Output () dataValues=new EventEmitter<object>();
  constructor(public dialogRef: MatDialogRef<popUpModalComponent>) { }
  gname: string='';
  gurl: string='';
  gid: number=1;
  
  ngOnInit(): void {
  }

  submitForm(){
      console.log(this.gname);
      console.log(this.gurl);
      this.dataValues.emit({ name: this.gname, url: this.gurl})
      // console.log(this.dataValues)
  }


 
}
