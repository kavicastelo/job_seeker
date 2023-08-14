import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AppointmentModel} from "../shared/modal/Appointment.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public reqAppointment(a: AppointmentModel): Observable<any> {
    return this.http.post(this.baseUrl + "saveAppointment", {
      id: a.id,
      country: a.country,
      category: a.category,
      consultant: a.consultant,
      jobRole: a.jobRole,
      name: a.name,
      email: a.email,
      date: a.date,
      approved: false
    });
  }

  public getAllAppointments(): Observable<any> {
    return this.http.get(this.baseUrl + "getAllAppointments");
  }
}
