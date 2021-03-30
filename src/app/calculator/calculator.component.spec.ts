import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('CalculatorComponent', () => {

it('addition of the no shoul equal to 10',()=>{
  let calc: CalculatorComponent=new CalculatorComponent()
  const area=calc.add(2,7)
  // let component: CalculatorComponent;
  // const area=component.add(2,7)
  expect(area).toEqual(9)
 })
 it('multiplication of the no',()=>{
  let calc: CalculatorComponent=new CalculatorComponent()
  const area=calc.multiplication(2,7)
  expect(area).toEqual(14)
 })

 it('minus',()=>{
  let calc: CalculatorComponent=new CalculatorComponent()
  const data=calc.minus(2,4)
  expect(data).toEqual(2)
 })
 it('div',()=>{
  let calc: CalculatorComponent=new CalculatorComponent()
  const data=calc.div(6,2)
  // expect(data).toEqual(2)
  expect(data).toBeGreaterThan(5)
 })
});

it('validating area less the 230',()=>{

  let calc: CalculatorComponent=new CalculatorComponent()
  const area=calc.getArea(25,4)

  expect(area).toBeLessThan(230)

})
