import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbgsmisRoutingModule } from './bbgsmis-routing.module';
import { BbgsmisComponent } from './bbgsmis.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [BbgsmisComponent],
  imports: [
    CommonModule,
    BbgsmisRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class BbgsmisModule { }
