import { EmployeeSearchFormDataService } from '../../data/employeeSearchFormData.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees.html'
})

export class EmployeesListComponent implements OnInit {
  employees = [];

  constructor(private router: Router,
              private formDataService: EmployeeSearchFormDataService,
              private companyService: CompanyService) {
              }

  ngOnInit() {
    const data = this.formDataService.getVerifyEmployee();
    const surname = this.formDataService.getReVerifyEmployee();
    console.log(surname);
    if (surname) {
       this.companyService.reVerifyEmployees(
                  this.formDataService.getCompany().companyId, surname)
                  .map(res => this.employees = res.json())
                  .subscribe(
                    d => {
                      this.employees = d;
                      if (this.employees.length === 0) {
                        this.router.navigate(['main/select-client']);
                      }
                    },
                    e => console.log(e)
                  );
    } else if (data) {
      const obj = {};
      for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const val = data[key];
            obj[key] = val;
          }
      }
      this.companyService.verifyEmployees(
                  this.formDataService.getCompany().companyId, obj)
                  .map(res => this.employees = res.json())
                  .subscribe(
                    d => {
                      this.employees = d;
                      if (this.employees.length === 0) {
                        this.router.navigate(['main/reverify-employee']);
                      }
                    },
                    (error: Response) => {
                      console.log(error.statusText)
                    }
                  );
    } else {
      this.router.navigate(['main/select-client']);
    }
  }

  OnSelected(employee) {
    this.router.navigate(['/main', employee.employeeId, 'security' ])
  }
}
