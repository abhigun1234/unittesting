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
describe('Diminsion area validation', () => {
it('Validate are  is greater  then 100',()=>{
 let calc: CalculatorComponent=new CalculatorComponent()
 const area=calc.getArea(30,9)
 expect(area).toBeGreaterThan(100)
})
it('Validate are  is equal  to 100',()=>{
  let calc: CalculatorComponent=new CalculatorComponent()
  const area=calc.getArea(10,10)
  expect(area).toBe(100)
 })
it('validate are less then 150',()=>{

  let calc: CalculatorComponent=new CalculatorComponent()
  const area=calc.getArea(10,100)
 expect(area).toBeLessThan(150)
})
it('validate the name',()=>{
  
    let calc: CalculatorComponent=new CalculatorComponent()
    const name=calc.login()
   expect(name).toMatch("ravi")
  })
});
it('validating area less the 230',()=>{

  let calc: CalculatorComponent=new CalculatorComponent()
  const area=calc.getArea(250,4)

  expect(area).toBeLessThan(230)

})
