import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GaugeChartModule } from 'angular-gauge-chart';
import { GoogleChartsModule } from 'angular-google-charts';
import { GenpopupComponent } from './genpopup/genpopup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ColumpopupComponent } from './columpopup/columpopup.component';
import { GsmdComponent } from './gsmd/gsmd.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [DashboardComponent, GenpopupComponent, ColumpopupComponent, GsmdComponent],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRouting,
    GaugeChartModule,
    GoogleChartsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  entryComponents: [GenpopupComponent, ColumpopupComponent, GsmdComponent]
})
export class DashboardModule { }
