import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PowergenmisComponent } from './powergenmis.component';


const routes: Routes = [
  { path: '', component: PowergenmisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowergenmisRoutingModule { }
