import { Component } from '@angular/core';
import {consultants} from "../../../shared/components/store/consulant.data.store.test";

@Component({
  selector: 'app-reception-consultant-list',
  templateUrl: './reception-consultant-list.component.html',
  styleUrls: ['./reception-consultant-list.component.scss']
})
export class ReceptionConsultantListComponent {

  consultants:any = consultants;
}
