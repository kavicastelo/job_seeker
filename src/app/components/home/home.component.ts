import {Component, OnInit, ViewChild} from '@angular/core';
import {countries} from "../../shared/components/store/country-data-store";
import {jobs} from "../../shared/components/store/job-roles-data-store";
import {consultants} from "../../shared/components/store/consulant.data.store.test";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatDatepicker} from "@angular/material/datepicker";
import {DatePipe} from "@angular/common";
import {ConsultantService} from "../../services/consultant.service";
import {AppointmentService} from "../../services/appointment.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }, // Set locale if needed
  ],
})
export class HomeComponent implements OnInit{
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<any> | undefined;

  public countries: any = countries
  public jobs: any = jobs
  public consultants: any = consultants; //consultants is the initialized array, and it'll change in loadConsultants function

  public minDate: Date;
  public maxDate: Date;
  selectedConsultant: any; // Variable to store the selected consultant
  unavailableDates: string[] = [];

  generateId = Math.random().toString(36).substring(2);

  public appointmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private datePipe: DatePipe,
    private snackBar: MatSnackBar,
    private appointmentService:AppointmentService,
    private consultantService:ConsultantService) {
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

  ngOnInit() {
    this.loadConsultants();
  }

  submit() {
    if (this.appointmentForm.invalid) {
      return;
    }
    else{
      this.appointmentService.reqAppointment({
        id: this.generateId,
        country: this.appointmentForm.get('country')?.value,
        category: this.appointmentForm.get('jobCategory')?.value,
        consultant: this.appointmentForm.get('consultant')?.value,
        jobRole: this.appointmentForm.get('jobRole')?.value,
        name: this.appointmentForm.get('Name')?.value,
        email: this.appointmentForm.get('email')?.value,
        date: this.appointmentForm.get('selectedDate')?.value,
        approved: false
      }).subscribe((data: any) => {
        this.appointmentForm.reset();
        this.snackBar.open(data.message, 'OK')
      }, error => {
        this.snackBar.open('Something went wrong! try again', 'OK')
      })
    }
  }

  loadConsultants() {
    this.consultantService.getAllConsultants().subscribe((data: any) => {
      this.consultants = data;
    })
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
