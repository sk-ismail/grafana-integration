import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor( public sanitizer: DomSanitizer) {
    this.sanitizer=sanitizer;
    
   }

  //  datagen=data
  
   onsubmitForm(formData: object){
     console.log("recieved",  formData)
     data.push(formData)




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

}




