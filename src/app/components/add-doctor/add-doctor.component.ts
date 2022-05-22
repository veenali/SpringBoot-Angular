import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { DoctorServicesService } from 'src/app/doctor-services.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  // doctor:Doctor = new Doctor("", 0, "", "", 0)
  doctor = { name: '', age: 0, gender: '', specializedField: '', noOfPatientsAttended: 0 }
  message: any = ""

  constructor(private service: DoctorServicesService) { }

  ngOnInit(): void {
  }

  public addDoctor() {
    let res = this.service.addDoctor(this.doctor)
    res.subscribe((data) => this.message = data)
  }
}
