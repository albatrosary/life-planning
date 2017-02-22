import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { LifeEventsRoutingModule } from './life-events-routing.module';
import { LifeEventsComponent } from './life-events.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LifeEventsRoutingModule
  ],
  declarations: [LifeEventsComponent]
})
export class LifeEventsModule { }
