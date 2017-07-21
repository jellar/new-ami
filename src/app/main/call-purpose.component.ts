import { EmployeeSearchFormDataService } from '../data/employeeSearchFormData.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeSearch } from '../models/employeeSearch';

@Component({
  template: `
  <form #callPurposeForm="ngForm">
  <div class="card large grey lighten-4 z-depth-2">
    <div class="card-content">
      <span class="card-title"><h3>Call Purpose</h3></span>
     <div class="ami-callout ami-callout-green">
        <p>Call Purpose Instruction</p>
      </div>
      <div class="ami-callout ami-callout-orange">
        <p>Call Purpose Script</p>
      </div>
        <div class="form-group row">
          <div class="col-sm-5">
            <select class="form-control form-control-sm" name="callerType" [(ngModel)]="employeeSearch.callerType">
                  <option value="0" [hidden]="noCompanyFound">Self Caller</option>
                  <option value="1">Ask Query</option>
                  <option value="2">Request medical advice</option>
                </select>
          </div>
        </div>

    </div>
    <div class="card-action">
      <button type="button" class="btn btn-secondary" (click)="back()">BACK</button>
      <button type="submit" class="right btn btn-primary" (click)="next()">NEXT</button>
    </div>
  </div>
  </form>
  `
})

export class CallPurposeComponent implements OnInit {
  employeeSearch: EmployeeSearch = new EmployeeSearch();
  constructor(private router: Router,
              private formDataService: EmployeeSearchFormDataService) {

  }
  ngOnInit() {
     this.employeeSearch.callerType = this.formDataService.getCallType();
  }
  back() {
    this.router.navigate(['/main', this.formDataService.getCompany().companyId, 'client-script' ])
  }
  next() {
    this.formDataService.setCallType(this.employeeSearch.callerType);
    this.router.navigate(['/main/verify-employee']);
  }
}
