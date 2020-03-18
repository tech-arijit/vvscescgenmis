import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowergenmisRoutingModule } from './powergenmis-routing.module';
import { PowergenmisComponent } from './powergenmis.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [PowergenmisComponent],
  imports: [
    CommonModule,
    PowergenmisRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleChartsModule,
    NgSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})

export class PowergenmisModule { }
