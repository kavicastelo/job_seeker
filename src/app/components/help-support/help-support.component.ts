import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobSeekerService} from "../../services/job-seeker.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.scss']
})
export class HelpSupportComponent {

  constructor(private jobSeekerService: JobSeekerService, private snackBar: MatSnackBar) {
  }

  submitForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    message: new FormControl(null,[
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(500)
    ])
  })

  sendMessage(){
    this.jobSeekerService.sendMessage({
      email: this.submitForm.get('email')?.value,
      message: this.submitForm.get('message')?.value
    }).subscribe((resp) => {
      this.submitForm.reset();
      this.snackBar.open(resp.message+"\nReceptionist will contact you soon", 'OK');
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
