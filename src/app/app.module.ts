import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';

@NgModule({
  declarations: [AppComponent, MoneyTransferComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import the routing module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
