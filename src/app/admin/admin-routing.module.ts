import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLoginAccessGuard } from './admin-login/guard/admin-login-access.guard';
import { AdminLoginSessionGuard } from './admin-login/guard/admin-login-session.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        canActivate: [AdminLoginSessionGuard],
        loadChildren: () => import('./admin-login/admin-login.module').then(m => m.AdminLoginModule)
      },
      {
        path: 'app',
        canActivate: [AdminLoginAccessGuard],
        loadChildren: () => import('./master-admin/master-admin.module').then(m => m.MasterAdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
