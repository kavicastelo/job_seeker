import {Component, ViewChild} from '@angular/core';
import {countries} from "../../shared/components/store/country-data-store";
import {jobs} from "../../shared/components/store/job-roles-data-store";
import {consultants} from "../../shared/components/store/consulant.data.store.test";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatDatepicker} from "@angular/material/datepicker";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }, // Set locale if needed
  ],
})
export class HomeComponent {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<any> | undefined;

  public countries: any = countries
  public jobs: any = jobs
  public consultants: any = consultants

  public minDate: Date;
  public maxDate: Date;
  selectedConsultant: any; // Variable to store the selected consultant
  unavailableDates: string[] = [];

  public appointmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dateAdapter: DateAdapter<Date>, private datePipe: DatePipe) {
    this.appointmentForm = this.formBuilder.group({
      country: ['', Validators.required],
      jobCategory: ['', Validators.required],
      consultant: ['', Validators.required],
      jobRole: ['', Validators.required],
      Name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      selectedDate: [null, Validators.required], // Initialize with default date if needed
      unavailableDates: [], // To capture unavailable dates set by consultants
    });

    this.minDate = new Date(); // Today's date
    this.maxDate = this.calculateMaxDate();
  }

  submit() {
    if (this.appointmentForm.invalid) {
      return;
    }
    else{
      alert('Form Submitted Successfully');
    }
    // Submit logic here
  }

  get uniqueJobCategories() {
    return [...new Set(this.jobs.map((job: any) => job.cat))];
  }

  get filteredJobRoles() {
    const selectedCategory = this.appointmentForm.get('jobCategory')?.value;
    const selectedConsultant = this.appointmentForm.get('consultant')?.value;

    const selectedConsultantRoles = this.consultants.find((consultant: any) => consultant.name === selectedConsultant)?.jobRole || [];

    const filteredRoles = this.jobs.filter((job: any) => {
      return job.cat === selectedCategory && selectedConsultantRoles.includes(job.job);
    });
    return filteredRoles;
  }

  get filteredConsultants() {
    const selectedCountry = this.appointmentForm.get('country')?.value;
    const selectedCategory = this.appointmentForm.get('jobCategory')?.value;

    return this.consultants.filter((consultant: any) => consultant.country === selectedCountry && consultant.jobCategory === selectedCategory);
  }

  onCountryChange() {
    this.appointmentForm.get('jobCategory')?.setValue('');
    this.appointmentForm.get('consultant')?.setValue('');
    this.appointmentForm.get('jobRole')?.setValue('');
  }

  onJobCategoryChange() {
    this.appointmentForm.get('consultant')?.setValue('');
    this.appointmentForm.get('jobRole')?.setValue(''); // Reset selected job role
  }

  onConsultantChange() {
    this.appointmentForm.get('jobRole')?.setValue(''); // Reset selected job role
    const selectedConsultantName = this.appointmentForm.get('consultant')?.value;
    this.selectedConsultant = this.consultants.find((consultant: any) => consultant.name === selectedConsultantName);
    this.updateUnavailableDates();
  }

  openDatePicker() {
    // @ts-ignore
    this.datepicker.open();
  }

  calculateMaxDate(): Date {
    const currentDate = new Date();
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);
    return nextMonth;
  }

  updateUnavailableDates() {
    if (this.selectedConsultant) {
      this.unavailableDates = this.selectedConsultant.unavailableDates|| [];
    } else {
      this.unavailableDates = [];
    }
  }

  unavailableDatesFilter = (date: Date | null): boolean => {
    if (!date) {
      return false;
    }

    const dateString: any = this.datePipe.transform(date, 'M/d/yyyy');
    const trimmedDateString = dateString.trim();

    // Use a loop to check for the inclusion of the date
    for (const unavailableDate of this.unavailableDates) {
      if (unavailableDate.trim() === trimmedDateString) {
        return false; // Date is unavailable
      }
    }

    return true; // Date is available
  };

}
