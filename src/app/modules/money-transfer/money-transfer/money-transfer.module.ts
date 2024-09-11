import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { MoneyTransferRoutingModule } from './money-transfer-routing.module';
import { MoneyTransferComponent } from 'C:/Users/Mohamed Hesham/OneDrive/Desktop/finalproject/speedo-transfer-front-end/src/app/money-transfer/money-transfer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // Ensure RouterModule is imported
    MoneyTransferRoutingModule,
  ],
  // No declarations array here
})
export class MoneyTransferModule {}
