import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../services/appointment.service";
import {ConsultantService} from "../../../services/consultant.service";
import {AuthService} from "../../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit{
  countries: any;
  categories: any;
  matchingAppointments: any;

  loading:boolean = false;

  constructor(
    private appointmentService:AppointmentService,
    private consultantService:ConsultantService,
    private cookieService:AuthService,
    private snackBar:MatSnackBar) {
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
            appointment.consultant === consultantData.name &&
            appointment.approved === false
          );

          // console.log(this.matchingAppointments);
        });
      }
    );
  }

  updateAppointment(id: any) {
    this.loading = true;
    this.appointmentService.updateConsultant(id, {approved: true}).subscribe((resp) => {
      this.loading = false;
      this.snackBar.open(resp.message, 'OK', {duration: 2000});
      this.loadAppointments();
    }, (err) => {
      this.loading = false;
      this.snackBar.open('Something went wrong', 'OK', {duration: 2000});
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
