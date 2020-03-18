import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultHelper } from './_helpers/default';
import { ApiService } from './frontend/_services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AdminApiService } from './admin/_services/admin-api.service';
import { DataService } from './admin/_services/data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    DefaultHelper, ApiService, AdminApiService, DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
