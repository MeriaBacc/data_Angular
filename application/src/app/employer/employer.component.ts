import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, map, throwError } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { employerModel } from './employerModel';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  employeeData!: employerModel[];
  employerModelObj : employerModel = new employerModel();
  requests: any;
  errorMsg: any;
  p:any;
  orderHeader : String = '';
  isDescOrder : boolean = true;
  searchInput = {employee_name : '', employee_salary : null, employee_age : null }
  isShow = false;
  isShow_delete = false;
  isShow_update = false;
  
constructor( private api : ApiService ,private _liveAnnouncer: LiveAnnouncer) { }

ngOnInit(): void {
  this.getAll();
}


public getAll(){
  this.api.getEmployer().subscribe(data=> {
    this.employeeData = data ;
  }
  );
}

sort(orderName: string){
  this.isDescOrder = ! this.isDescOrder;
 this.orderHeader = orderName;
}




}
