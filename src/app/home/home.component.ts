import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-home',
  //inline template and styles example code
  template:`<div>
               Inline template
            </div>`,
  styles: [
      `div{
         color:red;
      }`]
})


export class HomeComponent implements OnInit {
  title: string ="Data entry";
  ngOnInit(): void {}


  constructor(){}

  //oneway-databinding or property binding
  isDisabled : boolean = true;

  //eventbinding
  onclick(){
    console.log("submit button is pressed")
  }

}




