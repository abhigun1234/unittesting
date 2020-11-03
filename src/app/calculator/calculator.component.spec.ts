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

it('addition of the no shoul equal to 10',()=>{
  let calc: CalculatorComponent=new CalculatorComponent()
  const area=calc.add(2,7)
  expect(area).toEqual(10)
 })


});
it('validating area less the 230',()=>{

  let calc: CalculatorComponent=new CalculatorComponent()
  const area=calc.getArea(25,4)

  expect(area).toBeLessThan(230)

})
