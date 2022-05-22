import { Component, OnInit } from '@angular/core';
import { DoctorServicesService } from 'src/app/doctor-services.service';
import { Patient } from 'src/app/patient';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  // patient: Patient = new Patient("", 0, "", "", "")
  patient = { name: '', gender: '', age: 0, visitedDoctor: '', dateOfVisit: '' }
  doctors: any
  message: any = ''

  constructor(private docService: DoctorServicesService, private patientService: PatientService) { }

  ngOnInit(): void {
    let res = this.docService.getAllDoctors()
    res.subscribe((data) => {
      this.doctors = data; console.log(this.doctors);
    })
  }

  public addPatient() {
    let res = this.patientService.addPatient(this.patient)
    res.subscribe(data => this.message = data)
  }

}
