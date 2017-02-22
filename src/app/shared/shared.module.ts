import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTextComponent } from './header-text/header-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderTextComponent],
  exports: [HeaderTextComponent]
})
export class SharedModule { }
