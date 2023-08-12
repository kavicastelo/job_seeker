import {Component, OnInit} from '@angular/core';
import {consultants} from "../../../shared/components/store/consulant.data.store.test";
import {HttpClient} from "@angular/common/http";
import {ConsultantService} from "../../../services/consultant.service";

@Component({
  selector: 'app-reception-interview-req',
  templateUrl: './reception-interview-req.component.html',
  styleUrls: ['./reception-interview-req.component.scss']
})
export class ReceptionInterviewReqComponent implements OnInit{
  consultants:any;

  constructor(private http: HttpClient, private consultantService: ConsultantService) {
  }

  ngOnInit() {
    this.loadInterviewReqs();
  }

  loadInterviewReqs() {
    this.consultantService.getAllConsultants().subscribe((data: any) => {
      this.consultants = data.filter((consultant:any) => consultant.verified===false);
    })
  }

}
