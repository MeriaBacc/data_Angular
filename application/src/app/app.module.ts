import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerComponent } from './employer/employer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { matSortAnimations } from '@angular/material/sort';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    OrderModule,
    FilterPipeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
