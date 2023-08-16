import {Component, OnInit} from '@angular/core';
import {consultants} from "../../../shared/components/store/consulant.data.store.test";
import {HttpClient} from "@angular/common/http";
import {ConsultantService} from "../../../services/consultant.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-reception-consultant-list',
  templateUrl: './reception-consultant-list.component.html',
  styleUrls: ['./reception-consultant-list.component.scss']
})
export class ReceptionConsultantListComponent implements OnInit{

  consultants:any;
  loading:boolean = false;

  constructor(private http: HttpClient, private consultantService: ConsultantService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loadConsultants()
  }

  loadConsultants() {
    this.consultantService.getAllConsultants().subscribe((data: any) => {
      this.consultants = data.filter((consultant: any) => consultant.verified);
    }, error => {
      this.openSnackBar('Something went wrong', 'Close');
    })
  }

  deleteUser(email: any) {
    if(confirm("Are you sure?")){
      this.loading = true;
      this.consultantService.deleteConsultantByEmail(email).subscribe(response=>{
        this.openSnackBar('Customer Deleted!','OK');
        this.loadConsultants();
        this.loading = false;
      },error=>{
        this.openSnackBar('Somethings Wrong! try again','OK');
        console.log(error);
        this.loading = false;
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}
