import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BbgsmisComponent } from './bbgsmis.component';

const routes: Routes = [
  { path: '', component: BbgsmisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BbgsmisRoutingModule { }
