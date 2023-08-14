import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../services/appointment.service";
import {ConsultantService} from "../../../services/consultant.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit{
  countries: any;
  categories: any;
  matchingAppointments: any;

  constructor(private appointmentService:AppointmentService, private consultantService:ConsultantService, private cookieService:AuthService) {
  }

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appointmentService.getAllAppointments().subscribe(
      data => {
        this.countries = data.filter((x: any) => x.country).map((x: any) => x.country);
        this.categories = data.filter((x: any) => x.category).map((x: any) => x.category);

        const email = this.cookieService.userEmail();
        this.consultantService.getConsultant(email).subscribe((consultantData: any) => {
          this.matchingAppointments = data.filter((appointment: any) =>
            appointment.country === consultantData.country &&
            appointment.category === consultantData.jobCategory &&
            appointment.consultant === consultantData.name
          );

          console.log(this.matchingAppointments);
        });
      }
    );
  }

  // getConsultantData(){
  //   const email = this.cookieService.userEmail()
  //   this.consultantService.getConsultant(email).subscribe((data:any) => {
  //     console.log(data)
  //   })
  // }

}
