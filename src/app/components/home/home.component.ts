import {Component} from '@angular/core';
import {countries} from "../../shared/components/store/country-data-store";
import {jobs} from "../../shared/components/store/job-roles-data-store";
import {consultants} from "../../shared/components/store/consulant.data.store.test";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public countries: any = countries
  public jobs: any = jobs
  public consultants: any = consultants

  public donationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.donationForm = this.formBuilder.group({
      country: ['', Validators.required],
      jobCategory: ['', Validators.required],
      consultant: ['', Validators.required],
      jobRole: ['', Validators.required],
      Name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.donationForm.invalid) {
      return;
    }

    // Submit logic here
  }

  get uniqueJobCategories() {
    return [...new Set(this.jobs.map((job: any) => job.cat))];
  }

  get filteredJobRoles() {
    const selectedCategory = this.donationForm.get('jobCategory')?.value;
    const selectedConsultant = this.donationForm.get('consultant')?.value;

    const selectedConsultantRoles = this.consultants.find((consultant: any) => consultant.name === selectedConsultant)?.jobRole || [];

    const filteredRoles = this.jobs.filter((job: any) => {
      return job.cat === selectedCategory && selectedConsultantRoles.includes(job.job);
    });
    return filteredRoles;
  }

  get filteredConsultants() {
    const selectedCountry = this.donationForm.get('country')?.value;
    const selectedCategory = this.donationForm.get('jobCategory')?.value;

    return this.consultants.filter((consultant: any) => consultant.country === selectedCountry && consultant.jobCategory === selectedCategory);
  }

  onCountryChange() {
    this.donationForm.get('jobCategory')?.setValue('');
    this.donationForm.get('consultant')?.setValue('');
    this.donationForm.get('jobRole')?.setValue('');
  }

  onJobCategoryChange() {
    this.donationForm.get('consultant')?.setValue('');
    this.donationForm.get('jobRole')?.setValue(''); // Reset selected job role
  }

  onConsultantChange() {
    this.donationForm.get('jobRole')?.setValue(''); // Reset selected job role
  }
}
