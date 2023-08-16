import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MessageModel} from "../shared/modal/Message.model";

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public sendMessage(m : MessageModel): Observable<any> {
    return this.http.post(this.baseUrl + "sendMessage", {
      email: m.email,
      message: m.message
    });
  }

  public loadJobSeekerRequests(): Observable<any> {
    return this.http.get(this.baseUrl + "loadJobSeekerRequests");
  }

  public deleteMessageRequest(email: any): Observable<any> {
    return this.http.delete(this.baseUrl + "deleteMessageRequest/" + email);
  }
}
