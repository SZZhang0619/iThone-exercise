import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './checkout/customer-info/customer-info.component';
import { PaymentInfoComponent } from './checkout/payment-info/payment-info.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
