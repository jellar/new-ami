
import { Component } from '@angular/core';
import { Transition } from '@uirouter/angular';
import { ClientScriptComponent } from './client-script.component';
import { MainComponent } from './main.component';
import { CallPurposeComponent } from './call-purpose.component';
import { SelectClientComponent } from './select-client/select-client.component';
import { CompanyService } from '../services/company.service';
import { VerifyEmployeeComponent } from './verify-employee/verify-employee.component';
import { ReVerifyEmployeeComponent } from './re-verify-employee.component';
import { EmployeesListComponent } from './employees/employees-list.component';
export let MAIN_STATES = [
  {
    name: 'main',
    url: '/main',
    // redirectTo: 'main.select-client',
    component: MainComponent,
    data: { requiresAuth: true }
  },
  {
    name: 'main.select-client',
    url: '/select-client',
    component: SelectClientComponent,
    resolve: [
      {
        token: 'companies',
        deps: [CompanyService],
        resolveFn: (companyService) => companyService.getAllCompanies()
      }
    ]
  },
  {
    name: 'main.client-script',
    url: '/:companyId/client-script',
    component: ClientScriptComponent,
    resolve: [
    {
      token: 'companyScript',
      deps: [Transition, CompanyService],
      resolveFn: (trans, companyService) => companyService.getCompanyScript(trans.params().companyId)
    }
    ]
  },
  {
    name: 'main.call-purpose',
    url: '/call-purpose',
    component: CallPurposeComponent
  },
   {
    name: 'main.verify-employee',
    url: '/verify-employee',
    component: VerifyEmployeeComponent
  },
  {
    name: 'main.re-verify-employee',
    url: '/re-verify-employee',
    component: ReVerifyEmployeeComponent
  },
  {
    name: 'main.employees',
    url: '/employees',
    component: EmployeesListComponent
  }
]
