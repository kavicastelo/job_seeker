import { Component } from '@angular/core';
import {consultants} from "../../../shared/components/store/consulant.data.store.test";

@Component({
  selector: 'app-reception-interview-req',
  templateUrl: './reception-interview-req.component.html',
  styleUrls: ['./reception-interview-req.component.scss']
})
export class ReceptionInterviewReqComponent {
  consultants:any = consultants;

}
