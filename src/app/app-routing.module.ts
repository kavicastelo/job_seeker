import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RequestConsultantProfessionComponent} from "./components/request-consultant-profession/request-consultant-profession.component";
import {BecomeConsultantComponent} from "./components/become-consultant/become-consultant.component";
import {ReceptionComponent} from "./components/reception/reception.component";
import {
  ReceptionInterviewReqComponent
} from "./components/reception/reception-interview-req/reception-interview-req.component";
import {
  ReceptionAddConsultantsComponent
} from "./components/reception/reception-add-consultants/reception-add-consultants.component";
import {
  ReceptionConsultantListComponent
} from "./components/reception/reception-consultant-list/reception-consultant-list.component";
import {
  ReceptionJobSeekerReqComponent
} from "./components/reception/reception-job-seeker-req/reception-job-seeker-req.component";
import {LoginConsultantComponent} from "./components/login-consultant/login-consultant.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginReceptionComponent} from "./components/login-reception/login-reception.component";
import {ReceptionGuard} from "./guards/reception.guard";
import {AppointmentsComponent} from "./components/dashboard/appointments/appointments.component";
import {UnavailableDatesComponent} from "./components/dashboard/unavailable-dates/unavailable-dates.component";
import {
  ApprovedAppointmentsComponent
} from "./components/dashboard/approved-appointments/approved-appointments.component";
import {HelpSupportComponent} from "./components/help-support/help-support.component";
import {ComingSoonComponent} from "./components/coming-soon/coming-soon.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SettingsComponent} from "./components/dashboard/settings/settings.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'become-a-consultant-application', component: RequestConsultantProfessionComponent},
  {path: 'become-a-consultant', component: BecomeConsultantComponent},
  {path: 'reception', component: ReceptionComponent, canActivate:[ReceptionGuard], children:[
      {path: '', redirectTo: '/reception/interview', pathMatch: 'full'},
      {path: 'interview', component: ReceptionInterviewReqComponent},
      {path: 'add-new', component: ReceptionAddConsultantsComponent},
      {path: 'consultant-list', component: ReceptionConsultantListComponent},
      {path: 'requests', component: ReceptionJobSeekerReqComponent},
      {path: 'settings', component: SettingsComponent},
    ]},
  {path: 'login', component: LoginConsultantComponent},
  {path: 'reception-login', component: LoginReceptionComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children:[
      {path: '', redirectTo: '/dashboard/appointments', pathMatch: 'full'},
      {path: 'appointments', component: AppointmentsComponent},
      {path: 'unavailable-dates', component: UnavailableDatesComponent},
      {path: 'approved-appointments', component: ApprovedAppointmentsComponent},
      {path: 'settings', component: SettingsComponent},
    ]},
  {path: 'help-support', component: HelpSupportComponent},
  {path: 'coming-soon', component: ComingSoonComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
