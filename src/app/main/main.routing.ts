import { RouterModule} from '@angular/router';
import { ClientScriptComponent } from './client-script.component';
import { MainComponent } from './main.component';
import { CallPurposeComponent } from './call-purpose.component';
import { SelectClientComponent } from './select-client/select-client.component';
import { VerifyEmployeeComponent } from './verify-employee/verify-employee.component';
import { ReVerifyEmployeeComponent } from './re-verify-employee.component';
import { EmployeesListComponent } from './employees/employees-list.component';
import { SecurityQuestionComponent } from './security-question/security-question.component';
import { AuthGuard } from '../auth/auth.guard';
import { CompaniesResolver } from './select-client/companies-resolver.service';

export const mainRouting = RouterModule.forChild([
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'select-client',
        component: SelectClientComponent,
        resolve: { companies: CompaniesResolver },
      },
      {
        path: ':companyId/client-script',
        component: ClientScriptComponent
      },
      {
        path: 'call-purpose',
        component: CallPurposeComponent
      },
      {
        path: 'verify-employee',
        component: VerifyEmployeeComponent
      },
      {
        path: 'reverify-employee',
        component: ReVerifyEmployeeComponent
      },
      {
        path: 'employees',
        component: EmployeesListComponent
      },
      {
        path: ':employeeId/security',
        component: SecurityQuestionComponent
      }
    ]
  }
])
