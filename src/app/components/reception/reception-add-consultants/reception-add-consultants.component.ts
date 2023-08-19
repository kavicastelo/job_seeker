import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ConsultantService} from "../../../services/consultant.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-reception-add-consultants',
  templateUrl: './reception-add-consultants.component.html',
  styleUrls: ['./reception-add-consultants.component.scss']
})
export class ReceptionAddConsultantsComponent {

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

  // submit(){
  //   this.consultantService.getConsultantByEmail(this.addForm.get('email')?.value).subscribe((res) => { // get email from login table
  //     if (res != null) { // check current email from login table
  //       this.openSnackBar('Consultant already exists', 'OK'); // is exists
  //     }
  //     else{ // is not exists
  //       if (this.addForm.get('password')?.value == this.addForm.get('repeatPassword')?.value){ // check password
  //         this.consultantService.createConsultant({ // create login details to logging table
  //           email: this.addForm.get('email')?.value,
  //           password: this.addForm.get('password')?.value
  //         }).subscribe((res) => { // if successfully created,
  //           this.consultantService.updateConsultant(this.addForm.get('email')?.value, { // update consultant table
  //             verified: true
  //           }).subscribe((res) => { // if successfully updated,
  //             this.consultantService.deleteConsultantByEmail(this.addForm.get('email')?.value).subscribe((res) => { // delete current consultant because he is added as new
  //               // delete success
  //             }, error => {
  //               this.snackBar.open("Error on deleting process", 'OK'); // error in deleting process
  //             })
  //             // this.openSnackBar(res.message, 'OK'); // updating process success
  //           }, error => {
  //             this.snackBar.open("Error on updating process", 'OK'); // error in updating process
  //           });
  //           this.addForm.reset(); // reset form
  //           this.openSnackBar(res.message, 'OK'); // successfully create consultant login
  //         }, error => {
  //           console.log(error); // error in creating consultant login
  //         });
  //       }
  //     }
  //   })
  //
  // }

  submit() {
    const email = this.addForm.get('email')?.value;

    this.consultantService.getConsultantByEmail(email).subscribe((res) => {
      if (res != null) {
        this.openSnackBar('Consultant already exists', 'OK');
      } else {
        if (this.addForm.get('password')?.value == this.addForm.get('repeatPassword')?.value) {
          this.createConsultant(email);
        }
      }
    });
  }

  createConsultant(email: string | null | undefined) {
    this.loading = true;
    this.consultantService.createConsultant({
      email: email,
      password: this.addForm.get('password')?.value
    }).subscribe(() => {
      this.updateConsultant(email);
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }

  updateConsultant(email: string | null | undefined) {
    this.consultantService.updateConsultant(email, {
      verified: true
    }).subscribe(() => {
      this.deleteConsultant(email);
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }

  deleteConsultant(email: string | null | undefined) {
    this.consultantService.deleteConsultant(email).subscribe(() => {
      this.addForm.reset();
      this.loading = false;
      this.openSnackBar('Consultant created successfully', 'OK');
    }, error => {
      this.loading = false;
      this.snackBar.open('Error on deleting process', 'OK');
    });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
