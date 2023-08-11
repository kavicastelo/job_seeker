import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RequestConsultantProfessionComponent} from "./components/request-consultant-profession/request-consultant-profession.component";
import {BecomeConsultantComponent} from "./components/become-consultant/become-consultant.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'become-a-consultant-application', component: RequestConsultantProfessionComponent},
  {path: 'become-a-consultant', component: BecomeConsultantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
