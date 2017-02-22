import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeEventsRoutingModule } from './life-events-routing.module';
import { LifeEventsComponent } from './life-events.component';

@NgModule({
  imports: [
    CommonModule,
    LifeEventsRoutingModule
  ],
  declarations: [LifeEventsComponent]
})
export class LifeEventsModule { }
