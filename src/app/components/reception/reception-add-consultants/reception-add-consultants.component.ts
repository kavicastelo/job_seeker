import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reception-add-consultants',
  templateUrl: './reception-add-consultants.component.html',
  styleUrls: ['./reception-add-consultants.component.scss']
})
export class ReceptionAddConsultantsComponent {

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

}
