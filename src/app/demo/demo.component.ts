import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
  public empFormGroup: FormGroup;
  public empPostResponse: any;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.empFormGroup = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      empId: ['']
    });
  }

  public onFormSubmit(): void {
    this.employeeService.createEmployee({ data: this.empFormGroup.value }).subscribe(
      res =>{
          this.empPostResponse = res;
      }, 
      error =>{
        alert("error: " + error)
      }
    );
  }
}
