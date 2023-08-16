import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ConsultantService} from "../../../services/consultant.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  loading:boolean = false;

  addForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null,[
      Validators.required,
      Validators.minLength(6)
    ]),
    repeatPassword: new FormControl(null,[
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(private http: HttpClient, private consultantService: ConsultantService, private snackBar: MatSnackBar) {
  }

  submit() {
    const email = this.addForm.get('email')?.value;
    const dto = {
      password: this.addForm.get('password')?.value
    }

    this.consultantService.getConsultantByEmail(email).subscribe((res) => {
      if (res != null) {
        this.updateAuth(email, dto);
      } else {
        if (this.addForm.get('password')?.value == this.addForm.get('repeatPassword')?.value) {
          this.createConsultant(email);
        }
      }
    });
  }

  updateAuth(email: string | null | undefined, password: { password: null | undefined }) {
    this.loading = true;
    this.consultantService.updateAuth(email, password).subscribe(() => {
      this.loading = false;
      this.addForm.reset();
      this.openSnackBar('Account updated', 'OK');
    }, error => {
      this.loading = false;
      this.addForm.reset();
      console.log(error);
    });

  }

  createConsultant(email: string | null | undefined) {
    this.loading = true;
    this.consultantService.createConsultant({
      email: email,
      password: this.addForm.get('password')?.value
    }).subscribe(() => {
      this.loading = false;
      this.openSnackBar('Account created', 'OK');
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }
}
