import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenmtdComponent } from './genmtd.component';

const routes: Routes = [
  { path: '', component: GenmtdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenmtdRoutingModule { }
