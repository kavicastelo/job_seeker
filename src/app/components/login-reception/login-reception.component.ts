import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConsultantService} from "../../services/consultant.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-reception',
  templateUrl: './login-reception.component.html',
  styleUrls: ['./login-reception.component.scss']
})
export class LoginReceptionComponent {

  loading:boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private consultantService:ConsultantService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      // this.route.navigate(['/reception']);
    }
  }

  login() {
    this.loading = true;
    this.consultantService.getConsultantByEmail(this.loginForm.get('email')?.value).subscribe(response=>{
      if (response !== null){
        if (response.email === this.loginForm.get('email')?.value){
          if (response.password === this.loginForm.get('password')?.value){
            this.loading = false;
            this.cookieService.createUser(response.email);
            this.route.navigateByUrl('/reception');
          }
          else{
            this.loading = false;
            this.openSnackBar('Password Incorrect','OK')
          }
        }
        else{
          this.loading = false;
          this.openSnackBar('User Not Found','OK')
        }
      }
      else {
        if (response === null) {
          if (this.loginForm.get('email')?.value + '' === 'admin@gmail.com') {
            if (this.loginForm.get('password')?.value + '' === 'Admin@12345') {
              this.loading = false;
              this.cookieService.createUser(this.loginForm.get('email')?.value+'');
              this.route.navigateByUrl('/reception');
            } else {
              this.loading = false;
              this.openSnackBar('Password Incorrect', 'OK')
            }
          } else {
            this.loading = false;
            this.openSnackBar('Email is required', 'OK')
          }
        }
        // this.loading = false;
        // this.openSnackBar('Admin Not Found','OK')
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
