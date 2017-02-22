import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheFlowRoutingModule } from './cache-flow-routing.module';
import { CacheFlowComponent } from './cache-flow.component';

@NgModule({
  imports: [
    CommonModule,
    CacheFlowRoutingModule
  ],
  declarations: [CacheFlowComponent]
})
export class CacheFlowModule { }
