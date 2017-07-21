import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MAIN_STATES } from './main.states';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormlyModule, FormlyBootstrapModule} from 'ng-formly';
import { MainComponent } from './main.component';
import { ClientScriptComponent } from './client-script.component';
import { CallPurposeComponent } from './call-purpose.component';
import { SelectClientComponent } from './select-client/select-client.component';

import { CompanyService } from '../services/company.service';
import { ReVerifyEmployeeComponent } from './re-verify-employee.component';
import { VerifyEmployeeComponent } from './verify-employee/verify-employee.component';
import { EmployeeSearchFormDataService } from '../data/employeeSearchFormData.service';
import { EmployeesListComponent } from './employees/employees-list.component';
import { SecurityQuestionComponent} from './security-question/security-question.component';
import { mainRouting } from './main.routing';
import { CompaniesResolver } from './select-client/companies-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    mainRouting,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  declarations: [
    MainComponent, SelectClientComponent, ClientScriptComponent, CallPurposeComponent,
    VerifyEmployeeComponent, ReVerifyEmployeeComponent, EmployeesListComponent,
    SecurityQuestionComponent
  ],
  providers: [
    CompanyService,
    EmployeeSearchFormDataService,
    CompaniesResolver
  ]
})
export class MainModule { }
