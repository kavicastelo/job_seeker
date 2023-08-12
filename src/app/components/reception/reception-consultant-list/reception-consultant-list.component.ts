import {Component, OnInit} from '@angular/core';
import {consultants} from "../../../shared/components/store/consulant.data.store.test";
import {HttpClient} from "@angular/common/http";
import {ConsultantService} from "../../../services/consultant.service";

@Component({
  selector: 'app-reception-consultant-list',
  templateUrl: './reception-consultant-list.component.html',
  styleUrls: ['./reception-consultant-list.component.scss']
})
export class ReceptionConsultantListComponent implements OnInit{

  consultants:any;

  constructor(private http: HttpClient, private consultantService: ConsultantService) {
  }

  ngOnInit() {
    this.loadConsultants()
  }

  loadConsultants() {
    this.consultantService.getAllConsultants().subscribe((data: any) => {
      this.consultants = data;
    })
  }

}
