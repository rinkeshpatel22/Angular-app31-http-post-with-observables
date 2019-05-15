import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl:string = "http://rinkesh.cf:3000/";
  constructor(private httpClient: HttpClient) { }

  createEmployee(formData): Observable<any> {
    return this.httpClient.post(this.apiUrl + 'employee', formData.data)
      .pipe(map((res: any) => res));
  }
}
