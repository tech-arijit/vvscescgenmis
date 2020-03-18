import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login.component';


const routes: Routes = [{
  path: '',
  component : AdminLoginComponent
}];


export const AdminLoginRouting: ModuleWithProviders = RouterModule.forChild(routes);
