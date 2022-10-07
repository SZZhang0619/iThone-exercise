import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { ExponentialstrengthPipe } from '../exponentialstrength.pipe';



@NgModule({
  declarations: [
    PowerBoostCalculatorComponent,
    ExponentialstrengthPipe],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PowerBoostCalculatorComponent
  ]
})
export class PowerBoostCalculatorModule { }
