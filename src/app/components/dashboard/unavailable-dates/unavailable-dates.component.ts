import {Component, OnInit} from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import { DatePipe } from "@angular/common";
import { ConsultantService } from "../../../services/consultant.service";
import { AuthService } from "../../../services/auth.service";
import {Moment} from "moment";
import * as moment from 'moment';

@Component({
  selector: 'app-unavailable-dates',
  templateUrl: './unavailable-dates.component.html',
  styleUrls: ['./unavailable-dates.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class UnavailableDatesComponent implements OnInit{

  selectedDates: Moment[] = [];

  public minDate: Date;
  public maxDate: Date;
  unavailableDates: string[] = [];
  selectedConsultant: any;

  constructor(
    private dateAdapter: DateAdapter<moment.Moment>,
    private datePipe: DatePipe,
    private consultantService: ConsultantService,
    private cookieService: AuthService
  ) {
    this.minDate = new Date(); // Today's date
    this.maxDate = this.calculateMaxDate();
  }

  ngOnInit() {
    this.loadConsultant();
  }

  loadConsultant() {
    this.consultantService.getConsultant(this.cookieService.userEmail()).subscribe(consultant => {
      this.selectedConsultant = consultant;
      this.updateUnavailableDates();
    })
  }

  onDateChange(event: MatDatepickerInputEvent<Date, Date | null>) {
    const selectedDate = moment(event.value); // Convert Date to Moment
    if (selectedDate.isValid() && !this.selectedDates.some(date => date.isSame(selectedDate, 'day'))) {
      this.selectedDates.push(selectedDate);
    }
  }

  submitDates() {
    // const datesFormatted = this.selectedDates.map(date => date.format('M/D/YYYY'));
    const email = this.cookieService.userEmail();
    const dto = {
      unavailableDates: this.selectedDates.map(date => date.format('M/D/YYYY'))
    };

    this.consultantService.setUnavailableDates(email, dto).subscribe(() => {
    }, error => {
      console.log(error);
    });
    this.loadConsultant();
  }

  updateUnavailableDates() {
    if (this.selectedConsultant) {
      this.unavailableDates = this.selectedConsultant.unavailableDates|| [];
    } else {
      this.unavailableDates = [];
    }
  }

  calculateMaxDate(): Date {
    const currentDate = new Date();
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);
    return nextMonth;
  }

  unavailableDatesFilter = (date: Date | null): boolean => {
    if (!date) {
      return false;
    }

    const dateString: any = this.datePipe.transform(date, 'M/d/yyyy');
    const trimmedDateString = dateString.trim();

    for (const unavailableDate of this.unavailableDates) {
      if (unavailableDate.trim() === trimmedDateString) {
        return false;
      }
    }

    return true;
  };
}
