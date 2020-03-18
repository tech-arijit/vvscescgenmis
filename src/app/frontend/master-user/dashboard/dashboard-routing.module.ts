import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent }
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);
