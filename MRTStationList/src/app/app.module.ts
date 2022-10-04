import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';
import { PowerBoostCalculatorModule } from './power-boost-calculator/power-boost-calculator.module';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    PowerBoostCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
