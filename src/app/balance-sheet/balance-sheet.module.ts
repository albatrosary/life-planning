import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { BalanceSheetComponent } from './balance-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BalanceSheetRoutingModule
  ],
  declarations: [BalanceSheetComponent]
})
export class BalanceSheetModule { }
