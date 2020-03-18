import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterAdminComponent } from './master-admin.component';


const routes: Routes = [
  {
    path: '',
    component: MasterAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  }
];


export const MasterAdminRouting: ModuleWithProviders = RouterModule.forChild(routes);
