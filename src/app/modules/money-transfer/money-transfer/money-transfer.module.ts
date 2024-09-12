import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { MoneyTransferRoutingModule } from './money-transfer-routing.module';
import { MoneyTransferComponent } from '../../../money-transfer/money-transfer.component';
@NgModule({
  imports: [CommonModule, RouterModule, MoneyTransferRoutingModule],
})
export class MoneyTransferModule {}
