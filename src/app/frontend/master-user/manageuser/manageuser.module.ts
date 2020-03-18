import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageuserRoutingModule } from './manageuser-routing.module';
import { ManageuserComponent } from './manageuser.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ManageuserComponent],
  imports: [
    CommonModule,
    ManageuserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    NgSelectModule
  ]
})
export class ManageuserModule {}
