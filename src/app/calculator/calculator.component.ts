import { Component, OnInit } from '@angular/core';
import { b } from '@angular/core/src/render3';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  minus(a,b){

  return a-b
  }
  getArea(length:number,breadth:number):number
  {
   return length*breadth
  }
  add(a:number,b:number){
    return a+b;
  }
  multiplication(a:number,b:number){
    return a*b;
  }
  div(x:number,y:number){
   return x/y;
  }
  login()
  {
    //alert(username)
     return "raj"

  }
  ngOnInit() {
  }

}
