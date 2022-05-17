import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { data } from 'src/app/app.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class popUpModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<popUpModalComponent>) { }
  gname: string='';
  gurl: string='';
  
  ngOnInit(): void {
  }

  submitForm(){

    if((this.gurl==="" && this.gname!=="") ){ //form-validation
      this.gurl="";
      alert('Enter Url');
    }
    else if(this.gname==="" && this.gurl!==""){
      this.gname="";
      alert('Enter Name');
    }
    else if(this.gurl==="" && this.gname===""){ 
      alert("Empty Fields"); 
    }
    else{
      if (this.gurl.indexOf("http://") == 0 || this.gurl.indexOf("https://") == 0) { //Link-validation
        console.log("The link has http or https.");
        data.push({ name: this.gname, url: this.gurl});
        this.gname=""
        this.gurl=""
      } else{
        alert("The link doesn't have http or https.");
      }
      }

  }

}
