import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {countries} from "../../shared/components/store/country-data-store";
import {jobs} from "../../shared/components/store/job-roles-data-store";

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

  get uniqueJobCategories() {
    return [...new Set(this.jobs.map((job: any) => job.cat))];
  }

  get filteredJobRoles() {
    const selectedCategory = this.contactForm.get('jobCategory')?.value;
    return this.jobs.filter((job:any) => job.cat === selectedCategory);
  }

  submit() {
    console.log(this.contactForm.get('jobRoles')?.value);
  }

}
