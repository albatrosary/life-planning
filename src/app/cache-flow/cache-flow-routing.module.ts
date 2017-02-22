import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CacheFlowComponent } from './cache-flow.component';

const routes: Routes = [
  { path: '', component: CacheFlowComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CacheFlowRoutingModule { }
