import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenmtdRoutingModule } from './genmtd-routing.module';
import { GenmtdComponent } from './genmtd.component';

@NgModule({
  declarations: [GenmtdComponent],
  imports: [
    CommonModule,
    GenmtdRoutingModule
  ]
})
export class GenmtdModule { }
