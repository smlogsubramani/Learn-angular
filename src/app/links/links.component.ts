import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

//properties
 public render =" rendring from the component.ts "
 public siteurl = window.location.href;
 public myid = "testid";
 public isDisabled = false;
 public change = "loga";
 public hasError= true;
 public greetingusers="";
 public color = false;
 public notboolean="loga";
 public names=['loga','priya','navin','kaushik','vaishu'];
//  @Input() public parentData:any;
 public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
  //method
  greetuser(){
    return "hello" + this.render;
  }
  onclick(){
    this.greetingusers="welcome to the learn-anguilar-module"
  }
  logMessage(value: any){
    console.log(value);
  }

  //try
  logmessage(value:any){
    console.log(value);
  }
}


