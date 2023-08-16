import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ConsultantsModel} from "../shared/modal/Consultants.model";
import {AddConsultant} from "../shared/modal/Consultants.model";

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

  public createConsultant(c: AddConsultant): Observable<any> {
    return this.http.post(this.baseUrl + "addConsultant", {
      email: c.email,
      password: c.password
    });
  }

  public getConsultantByEmail(email: any): Observable<any> {
    return this.http.get(this.baseUrl + "getConsultantByEmail/" + email);
  }

  public updateConsultant(email: any, updatedConsultant: any): Observable<any> {
    return this.http.put(this.baseUrl + "updateConsultantByEmail/" + email, updatedConsultant);
  }

  public deleteConsultantByEmail(email: any): Observable<any> {
    return this.http.delete(this.baseUrl + "deleteConsultantByEmail/" + email);
  }

  public getConsultant(email: any): Observable<any> {
    return this.http.get(this.baseUrl + "getConsultant/" + email);
  }

  public setUnavailableDates(email: any, unavailableDates: any, options?: any): Observable<any> {
    return this.http.put(this.baseUrl + "setUnavailableDates/" + email, unavailableDates, options);
  }

  public updateAuth(email: any, password: any, options?: any): Observable<any> {
    return this.http.put(this.baseUrl + "updateAuth/" + email, password, options);
  }

}
