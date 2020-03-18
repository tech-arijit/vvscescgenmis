import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { ChangepasswordComponent } from './changepassword.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [ChangepasswordComponent],
  imports: [
    CommonModule,
    ChangepasswordRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})
export class ChangepasswordModule { }
