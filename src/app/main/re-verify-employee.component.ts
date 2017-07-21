import { EmployeeSearchFormDataService } from '../data/employeeSearchFormData.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
    <div class="card large grey lighten-4 z-depth-2">
    <div class="card-content">
      <span class="card-title"><h3>Re Verify Employee</h3></span>
     <div class="ami-callout ami-callout-green">
        <p>ReVerify Employee Instruction</p>
      </div>
      <div class="ami-callout ami-callout-orange">
        <p>ReVerify Employee Script</p>
      </div>
       <form #reVerifyEmployeeForm="ngForm">

          <div class="form-group row">
            <div class="col-sm-2">Employee Surname</div>
            <div class="col-sm-4">
              <input type="text" [(ngModel)]="employeeSurname" class="form-control form-control-sm" name="employeeSurname" required/>
            </div>
          </div>
      </form>
    </div>
    <div class="card-action">
      <button type="button" class="btn btn-secondary" (click)="back()">BACK</button>
      <button type="submit" class="right btn btn-primary" (click)="next()">NEXT</button>
    </div>
  </div>
    `
})

export class ReVerifyEmployeeComponent implements OnInit {
  employeeSurname: string;
  constructor(private router: Router,
             private formDataService: EmployeeSearchFormDataService) {

  }

  ngOnInit() {
    this.employeeSurname = this.formDataService.getReVerifyEmployee();
  }

  back() {
    this.router.navigate(['main/verify-employee']);
  }
  next() {
    console.log(this.employeeSurname);
    this.formDataService.setReVerifyEmployee(this.employeeSurname);
    this.router.navigate(['main/employees']);
  }
}
