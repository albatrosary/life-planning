import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceSheetComponent } from './balance-sheet.component';

const routes: Routes = [
  { path: '', component: BalanceSheetComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BalanceSheetRoutingModule { }
