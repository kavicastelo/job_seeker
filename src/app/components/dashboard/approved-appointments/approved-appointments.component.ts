import {Component} from '@angular/core';
import {AppointmentService} from "../../../services/appointment.service";
import {ConsultantService} from "../../../services/consultant.service";
import {AuthService} from "../../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-approved-appointments',
  templateUrl: './approved-appointments.component.html',
  styleUrls: ['./approved-appointments.component.scss']
})
export class ApprovedAppointmentsComponent {

  countries: any;
  categories: any;
  matchingAppointments: any;

  constructor(
    private appointmentService: AppointmentService,
    private consultantService: ConsultantService,
    private cookieService: AuthService,
    private snackBar: MatSnackBar) {
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
            appointment.approved
          );

          // console.log(this.matchingAppointments);
        });
      }
    );
  }

  deleteAppointment(id: any) {
    if (confirm('Are you sure you want to delete this appointment?')){
      this.appointmentService.deleteAppointment(id).subscribe((resp) => {
        this.snackBar.open(resp.message, 'OK', {duration: 2000});
        this.loadAppointments();
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration: 2000});
  }

}
