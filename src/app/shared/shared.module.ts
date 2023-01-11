import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { Button1Component } from './button1/button1.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ButtonComponent,
    Button1Component,
    ListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    Button1Component,
    ListComponent,
  ]
})
export class SharedModule { }
