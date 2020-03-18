import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginRouting } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminLoginRouting,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class AdminLoginModule { }
