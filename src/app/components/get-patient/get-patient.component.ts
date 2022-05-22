import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.css']
})
export class GetPatientComponent implements OnInit {

  patients: any;
  patientName: string = ''
  message: string = ''

  constructor(private service: PatientService) { }

  ngOnInit(): void {
    let res = this.service.getAllPatients();
    res.subscribe(data => this.patients = data)
  }

  public getPatientByName() {
    let res = this.service.getPatientByName(this.patientName)
    res.subscribe(data => {
      if (data != null) {
        this.patients = data
        this.message = ''
      } else {
        this.patients = []
        this.message = 'No Patient with this name'
      }
    })
  }

}
