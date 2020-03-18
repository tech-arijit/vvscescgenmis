import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitwisemtdRoutingModule } from './unitwisemtd-routing.module';
import { UnitwisemtdComponent } from './unitwisemtd.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [UnitwisemtdComponent],
  imports: [
    CommonModule,
    GoogleChartsModule,
    UnitwisemtdRoutingModule
  ]
})
export class UnitwisemtdModule { }
