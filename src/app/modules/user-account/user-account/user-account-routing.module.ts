import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './pages/profile/my-profile/my-profile.component';
import { MoneyTransferComponent } from '../../../money-transfer/money-transfer.component';

const routes: Routes = [
  { path: '', component: MoneyTransferComponent },
  {
    path: 'pages',
    component: MyProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccountRoutingModule {}
