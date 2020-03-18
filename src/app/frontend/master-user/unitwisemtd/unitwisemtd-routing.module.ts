import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitwisemtdComponent } from './unitwisemtd.component';

const routes: Routes = [
  { path: '', component: UnitwisemtdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitwisemtdRoutingModule { }
