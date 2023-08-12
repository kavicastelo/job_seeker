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

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'become-a-consultant-application', component: RequestConsultantProfessionComponent},
  {path: 'become-a-consultant', component: BecomeConsultantComponent},
  {path: 'reception', component: ReceptionComponent, children:[
      {path: '', redirectTo: '/reception/interview', pathMatch: 'full'},
      {path: 'interview', component: ReceptionInterviewReqComponent},
      {path: 'add-new', component: ReceptionAddConsultantsComponent},
      {path: 'consultant-list', component: ReceptionConsultantListComponent},
      {path: 'requests', component: ReceptionJobSeekerReqComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
