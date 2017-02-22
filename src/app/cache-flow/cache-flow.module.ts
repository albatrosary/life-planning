import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CacheFlowRoutingModule } from './cache-flow-routing.module';
import { CacheFlowComponent } from './cache-flow.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CacheFlowRoutingModule
  ],
  declarations: [CacheFlowComponent]
})
export class CacheFlowModule { }
