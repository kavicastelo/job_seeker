import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {countries} from "../../shared/components/store/country-data-store";
import {jobs} from "../../shared/components/store/job-roles-data-store";
import {ConsultantService} from "../../services/consultant.service"
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-request-consultant-profession',
  templateUrl: './request-consultant-profession.component.html',
  styleUrls: ['./request-consultant-profession.component.scss']
})
export class RequestConsultantProfessionComponent {

  countries:any = countries;
  public jobs: any = jobs;

  contactForm = new FormGroup({
    name: new FormControl(null,[
      Validators.required
    ]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl(null,[
      Validators.required
    ]),
    address: new FormControl(null,[
      Validators.required
    ]),
    country: new FormControl(null,[
      Validators.required
    ]),
    jobCategory: new FormControl(null,[
      Validators.required
    ]),
    jobRoles: new FormControl(null,[
      Validators.required
    ]),
    portfolio: new FormControl(null)
  })

  constructor(private consultantService: ConsultantService, private router: Router, private snackBar: MatSnackBar) {
  }

  get uniqueJobCategories() {
    return [...new Set(this.jobs.map((job: any) => job.cat))];
  }

  get filteredJobRoles() {
    const selectedCategory = this.contactForm.get('jobCategory')?.value;
    return this.jobs.filter((job:any) => job.cat === selectedCategory);
  }

  submit() {
    this.consultantService.reqConsultant({
      country:this.contactForm.get('country')?.value,
      jobCategory:this.contactForm.get('jobCategory')?.value,
      jobRole:this.contactForm.get('jobRoles')?.value,
      name:this.contactForm.get('name')?.value,
      email:this.contactForm.get('email')?.value,
      phone:this.contactForm.get('phone')?.value,
      address:this.contactForm.get('address')?.value,
      unavailableDates:[],
      portfolio:this.contactForm.get('portfolio')?.value,
      verified:false}
    ).subscribe((res:any) => {
      this.contactForm.reset();
      this.openSnackBar('Requested Interview!','OK');
    }, (err:any) => {
      console.log(err)
      this.openSnackBar('Something went wrong! try again later!','OK');
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
