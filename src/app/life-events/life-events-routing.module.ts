import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifeEventsComponent } from './life-events.component';

const routes: Routes = [
   { path: '', component: LifeEventsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LifeEventsRoutingModule { }
