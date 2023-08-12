import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ConsultantsModel} from "../shared/modal/Consultants.model";

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public reqConsultant(c: ConsultantsModel): Observable<any> {
    return this.http.post(this.baseUrl + "saveConsultant", {
      country: c.country,
      jobCategory: c.jobCategory,
      jobRole: c.jobRole,
      name: c.name,
      email: c.email,
      phone: c.phone,
      address: c.address,
      unavailableDates: [],
      portfolio:c.portfolio,
      verified: false
    });
  }

  public getAllConsultants(): Observable<any> {
    return this.http.get(this.baseUrl + "getAllConsultants");
  }
}
