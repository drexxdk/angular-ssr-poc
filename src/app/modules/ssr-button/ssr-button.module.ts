import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsrButtonComponent } from './ssr-button.component';



@NgModule({
  declarations: [
    SsrButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SsrButtonComponent
  ]
})
export class SsrButtonModule { }
