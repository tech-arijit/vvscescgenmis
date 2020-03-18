import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { MasterUserComponent } from './master-user.component';
import { MasterUserRouting } from './master-user-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    MasterUserComponent,
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MasterUserRouting,
    MatProgressBarModule
  ]
})
export class MasterUserModule { }

