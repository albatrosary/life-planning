import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'balance-payments', pathMatch: 'full'},
  { path: 'balance-payments', loadChildren: './balance-payments/balance-payments.module#BalancePaymentsModule' },
  { path: 'balance-sheet', loadChildren: './balance-sheet/balance-sheet.module#BalanceSheetModule' },
  { path: 'life-events', loadChildren: './life-events/life-events.module#LifeEventsModule' },
  { path: 'cache-flow', loadChildren: './cache-flow/cache-flow.module#CacheFlowModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
