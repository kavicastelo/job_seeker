import {Component, OnInit} from '@angular/core';
import {JobSeekerService} from "../../../services/job-seeker.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-reception-job-seeker-req',
  templateUrl: './reception-job-seeker-req.component.html',
  styleUrls: ['./reception-job-seeker-req.component.scss']
})
export class ReceptionJobSeekerReqComponent implements OnInit{

  messageRequests:any

  constructor(private jobSeekerService: JobSeekerService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loadJobSeekerRequests()
  }

  loadJobSeekerRequests() {
    this.jobSeekerService.loadJobSeekerRequests().subscribe((resp) => {
      this.messageRequests = resp
    });
  }

  detectMessageRequest(email:any) {
    this.jobSeekerService.deleteMessageRequest(email).subscribe((resp) => {
      this.snackBar.open('Message Request Deleted', 'Close', {duration:2000});
      this.loadJobSeekerRequests()
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }
}
