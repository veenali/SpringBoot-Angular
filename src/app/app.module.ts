import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GetDoctorComponent } from './components/get-doctor/get-doctor.component';
import { GetPatientComponent } from './components/get-patient/get-patient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component'

@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    NavbarComponent,
    GetDoctorComponent,
    GetPatientComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
