import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { GetDoctorComponent } from './components/get-doctor/get-doctor.component';
import { GetPatientComponent } from './components/get-patient/get-patient.component';

const routes: Routes = [
  { path: "", redirectTo: "addDoctor", pathMatch: "full" },
  { path: "addDoctor", component: AddDoctorComponent },
  { path: "allDoctors", component: GetDoctorComponent },
  { path: "allPatients", component: GetPatientComponent },
  { path: "addPatient", component: AddPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
