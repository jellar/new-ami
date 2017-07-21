import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Company } from '../../models/company';
import { EmployeeSearchFormDataService } from '../../data/employeeSearchFormData.service';

@Component({
  templateUrl: './select-client.component.html'
})

export class SelectClientComponent implements OnInit {
  form: FormGroup;
  company: Company = new Company();
  companies = [];
  constructor(private router: Router,
              private route: ActivatedRoute,
              private formDataService: EmployeeSearchFormDataService
              ) {

  }
  ngOnInit() {
     this.route.data
      .subscribe(
        (data: Data) => {
          this.companies = data['companies'];
        }
      );
    this.company = this.formDataService.getCompany();
  }
  next() {
     console.log(this.company.companyId);
     this.formDataService.setCompany(this.company);
      this.router.navigate(['/main', this.company.companyId, 'client-script' ])
  }

}
