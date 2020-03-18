import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterAdminRouting } from './master-admin-routing.module';
import { MasterAdminComponent } from './master-admin.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    MasterAdminComponent,
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MasterAdminRouting,
    MatProgressBarModule
  ]
})
export class MasterAdminModule { }
