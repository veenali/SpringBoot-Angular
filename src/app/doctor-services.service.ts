import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorServicesService {

  constructor(private http: HttpClient) { }

  public getAllDoctors(){
    return this.http.get("http://localhost:8080/doctor")
  }

  public addDoctor(doctor:Doctor) {
    return this.http.post("http://localhost:8080/doctor", doctor, { responseType: 'text' as 'json' })
  }
}
