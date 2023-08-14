import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ConsultantService} from "../../services/consultant.service";

@Component({
  selector: 'app-login-consultant',
  templateUrl: './login-consultant.component.html',
  styleUrls: ['./login-consultant.component.scss']
})
export class LoginConsultantComponent {

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
      this.route.navigate(['/dashboard']);
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
            this.route.navigateByUrl('/dashboard');
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
        this.loading = false;
        this.openSnackBar('User Not Found','OK')
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
