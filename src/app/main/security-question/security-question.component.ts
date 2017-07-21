import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Employee } from '../../models/employee';

@Component({
  templateUrl: './security-question.html'
})

export class SecurityQuestionComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private service: CompanyService,
              private router: Router,
            private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
        .map(params => params['employeeId'])
        .switchMap(id => this.service.getEmployeeSecurity(id))
        .subscribe(data => this.employee = data);
  }
}
