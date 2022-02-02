import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { employerModel } from '../employer/employerModel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  _url: string = "/assets/data/employees.json";
  
  constructor(private http : HttpClient) { 

  }





getEmployer(): Observable<employerModel[]> {
  return this.http.get<employerModel[]>(this._url);
}



}
