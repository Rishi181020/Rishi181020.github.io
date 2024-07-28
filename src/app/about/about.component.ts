import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

translatebooelan:boolean=false;

 translatebool(){
  this.translatebooelan=!this.translatebooelan;
 }
}
