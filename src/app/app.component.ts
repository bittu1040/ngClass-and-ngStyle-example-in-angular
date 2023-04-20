import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
 isButton = true;
 isPrimary = true;

  canSubmit = false;

 toggleButton() {
   this.isPrimary = !this.isPrimary;
 }

 step1=false
 flag= true;
 toggleButtonForngStyle(){
   this.flag= !this.flag
 }

 toggleButtonForngClass(){
   this.step1=!this.step1
 }
}
