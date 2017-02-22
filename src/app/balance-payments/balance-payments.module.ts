import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { BalancePaymentsRoutingModule } from './balance-payments-routing.module';
import { BalancePaymentsComponent } from './balance-payments.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BalancePaymentsRoutingModule
  ],
  declarations: [BalancePaymentsComponent]
})
export class BalancePaymentsModule { }
