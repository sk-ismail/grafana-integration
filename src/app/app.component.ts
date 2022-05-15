import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { popUpModalComponent } from './components/modal/modal.component';
import { SafePipe } from './safe.pipe';

export interface User{
  name: string;
  url: string;
}

export const data: any[] =[{
  id: 1,
  name: "Bin-to-Bin",
  url: "http://localhost:3020/d-solo/uj4J8qlnz/new-dashboard?orgId=1&from=1652335264575&to=1652356864575&theme=light&panelId=2"
 }]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public matDialog: MatDialog, public sanitizer: DomSanitizer) {
    this.sanitizer=sanitizer;
    
   }

  //  datagen=data
  
   onsubmitForm(formData: object){
     console.log("recieved",  formData)
     data.push(formData)


    //  localStorage.setItem("datairfan", data.toString())

     console.log(data)
   }
   
   DeletedItem(values: any){  
     console.log("values",values)
    for(var i = data.length - 1; i >= 0; i--) {  
    if(data[i].name === values.name) {  
    data.splice(i, 1);  
    }  
    }  
    } 

  // grafanaUrl(){
  //   for(let i=0; i<this.datagen.length; i++){
  //     this.sanitizer.
  //   }
  // }

}




