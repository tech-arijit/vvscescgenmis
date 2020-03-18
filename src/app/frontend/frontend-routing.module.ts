import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSessionGuard } from './login/guard/login-session.guard';
import { LoginAccessGuard } from './login/guard/login-access.guard';
import { FrontendComponent } from './frontend.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        canActivate: [LoginSessionGuard],
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path: 'forgotpassword',
        loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule)
      },
      {
        path: 'app',
        canActivate: [LoginAccessGuard],
        loadChildren: () => import('./master-user/master-user.module').then(m => m.MasterUserModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
