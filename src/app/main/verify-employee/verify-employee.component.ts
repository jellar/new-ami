import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from 'ng-formly';
import { EmployeeSearch } from '../../models/employeeSearch';
import { CompanyService } from '../../services/company.service';
import { EmployeeSearchFormDataService } from '../../data/employeeSearchFormData.service';

@Component({
    templateUrl: './verify-employee.component.html'
})

export class VerifyEmployeeComponent implements OnInit {
  employeeSearch: EmployeeSearch = new EmployeeSearch();
  questions = [];
  model: any = [];
  empInitSearchForm: FormGroup = new FormGroup({});
  empInitSearchFields: FormlyFieldConfig;
  constructor(private router: Router,
              private formDataService: EmployeeSearchFormDataService) {

  }

  ngOnInit() {
    this.empInitSearchFields = [{
        className: 'form-group',
        fieldGroup: [{
            className: 'col-xs-5',
            key: 'employeeDob',
            type: 'input',
            templateOptions: {
                type: 'date',
                label: 'Employee DoB',
                placeholder: 'Enter DoB'
            },
            validators: {
              validation: Validators.compose([Validators.required])
            }
        }]
      }];
      console.log(this.formDataService.getVerifyEmployee());
      this.model = this.formDataService.getVerifyEmployee();
  }

  back() {
    this.router.navigate(['main/call-purpose']);
  }
  next() {
    this.router.navigate(['main/employees']);
  }

  verifyEmployee(data) {
    this.model = data;
    this.formDataService.setReVerifyEmployee(null);
    this.formDataService.setVerifyEmployee(this.model);
    this.router.navigate(['main/employees']);
  }
}
