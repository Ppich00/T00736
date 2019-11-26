import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleOnlineModule } from './component/saleOnline/saleOnline.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SaleOnlineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
