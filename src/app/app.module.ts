import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectCountryModule} from "@angular-material-extensions/select-country";
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {DatePipe} from "@angular/common";
import { RequestConsultantProfessionComponent } from './components/request-consultant-profession/request-consultant-profession.component';
import { BecomeConsultantComponent } from './components/become-consultant/become-consultant.component';
import { ReceptionComponent } from './components/reception/reception.component';
import { ReceptionInterviewReqComponent } from './components/reception/reception-interview-req/reception-interview-req.component';
import { ReceptionAddConsultantsComponent } from './components/reception/reception-add-consultants/reception-add-consultants.component';
import { ReceptionConsultantListComponent } from './components/reception/reception-consultant-list/reception-consultant-list.component';
import { ReceptionJobSeekerReqComponent } from './components/reception/reception-job-seeker-req/reception-job-seeker-req.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { LoginConsultantComponent } from './components/login-consultant/login-consultant.component';
import { LoginReceptionComponent } from './components/login-reception/login-reception.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentsComponent } from './components/dashboard/appointments/appointments.component';
import { UnavailableDatesComponent } from './components/dashboard/unavailable-dates/unavailable-dates.component';
import {MatCardModule} from "@angular/material/card";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { ApprovedAppointmentsComponent } from './components/dashboard/approved-appointments/approved-appointments.component';
import { HelpSupportComponent } from './components/help-support/help-support.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestConsultantProfessionComponent,
    BecomeConsultantComponent,
    ReceptionComponent,
    ReceptionInterviewReqComponent,
    ReceptionAddConsultantsComponent,
    ReceptionConsultantListComponent,
    ReceptionJobSeekerReqComponent,
    LoginConsultantComponent,
    LoginReceptionComponent,
    DashboardComponent,
    AppointmentsComponent,
    UnavailableDatesComponent,
    ApprovedAppointmentsComponent,
    HelpSupportComponent,
    ComingSoonComponent,
    NotFoundComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    HttpClientModule,
    MatSelectCountryModule.forRoot('en'),
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    MatMomentDateModule
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
