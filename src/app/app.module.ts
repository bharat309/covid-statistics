import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryComponent } from './components/navbar/country/country.component';
import { HomeComponent } from './components/navbar/home/home.component';
import { DashbordCardComponent } from './components/dashbord-card/dashbord-card.component';

const routes:Routes=[
  {
  path:"",component:HomeComponent
  },
  {
  path:"country",component:CountryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountryComponent,
    HomeComponent,
    DashbordCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
