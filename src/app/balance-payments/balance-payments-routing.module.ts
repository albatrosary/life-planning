import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancePaymentsComponent } from './balance-payments.component';

const routes: Routes = [
  { path: '', component: BalancePaymentsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BalancePaymentsRoutingModule { }
