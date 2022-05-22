import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { DoctorServicesService } from 'src/app/doctor-services.service';

@Component({
  selector: 'app-get-doctor',
  templateUrl: './get-doctor.component.html',
  styleUrls: ['./get-doctor.component.css']
})
export class GetDoctorComponent implements OnInit {
  allDoctors: any

  constructor(private service: DoctorServicesService) { }

  // public getAllDoctors() {
  //   let res = this.service.getAllDoctors()
  //   res.subscribe((data) => { this.allDoctors = data; console.log(this.allDoctors); })

  // }

  ngOnInit(): void {
    let res = this.service.getAllDoctors()
    res.subscribe((data) => { this.allDoctors = data})
  }

}
