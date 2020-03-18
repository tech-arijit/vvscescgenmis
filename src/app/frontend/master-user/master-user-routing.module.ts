import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterUserComponent } from './master-user.component';

const routes: Routes = [
  {
    path: '',
    component: MasterUserComponent,
    children: [
      { path: '', redirectTo: 'surveys', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'bbgsmis', loadChildren: () => import('./bbgsmis/bbgsmis.module').then(m => m.BbgsmisModule) },
      { path: 'powergenmis', loadChildren: () => import('./powergenmis/powergenmis.module').then(m => m.PowergenmisModule) },
      { path: 'genmtd', loadChildren: () => import('./genmtd/genmtd.module').then(m => m.GenmtdModule) },
      { path: 'unitwisemtd', loadChildren: () => import('./unitwisemtd/unitwisemtd.module').then(m => m.UnitwisemtdModule) },
      { path: 'manageuser', loadChildren: () => import('./manageuser/manageuser.module').then(m => m.ManageuserModule) },
      { path: 'changepassword', loadChildren: () => import('./changepassword/changepassword.module').then(m => m.ChangepasswordModule) }
    ]
  }
];

export const MasterUserRouting: ModuleWithProviders = RouterModule.forChild(routes);
