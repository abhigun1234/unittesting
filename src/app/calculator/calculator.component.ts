import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  getArea(length:number,breadth:number):number
  {
   return length*breadth
  }
  add(a:number,b:number){
    return a+b;
  }

  login()
  {
    //alert(username)
     return "raj"

  }
  ngOnInit() {
  }

}
