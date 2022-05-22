import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  public getAllPatients() {
    return this.http.get("http://localhost:8080/patient")
  }

  public getPatientByName(patient: string) {
    return this.http.get("http://localhost:8080/patient/" + patient)
  }

  public addPatient(patient: Patient) {
    return this.http.post("http://localhost:8080/patient", patient, { responseType: 'text' as 'json' })
  }
}
