import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalancePaymentsRoutingModule } from './balance-payments-routing.module';
import { BalancePaymentsComponent } from './balance-payments.component';

@NgModule({
  imports: [
    CommonModule,
    BalancePaymentsRoutingModule
  ],
  declarations: [BalancePaymentsComponent]
})
export class BalancePaymentsModule { }
