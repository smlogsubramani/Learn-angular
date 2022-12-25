import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {}

  title : string ="";
  constructor(){}

  //oneway-databinding or property binding
  isDisabled : boolean = true;

  //eventbinding
  onclick(){
    console.log("submit button is pressed")
  }

}




