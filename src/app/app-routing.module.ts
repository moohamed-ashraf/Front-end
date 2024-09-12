import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';

const routes: Routes = [
  { path: 'money-transfer', component: MoneyTransferComponent },
  { path: '', redirectTo: 'money-transfer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
