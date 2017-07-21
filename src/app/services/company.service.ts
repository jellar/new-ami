import { Injectable } from '@angular/core';
import { AuthHttpService } from '../auth/auth-http.service';
import 'rxjs/Rx';

@Injectable()
export class CompanyService {
  cache = null;
  companyScript = null;
  constructor(private authHttp: AuthHttpService) {
    console.log('company service');
  }

  getAllCompanies() {
    return  this.authHttp.get('api/company')
                  .map(response => response.json())
  }
  getCompanyScript(id) {
    return this.authHttp.get('api/companyScript/' + id )
                      .map(response => response.json())
  }

  getEmployeesByDob(id: number, dob: any ) {
    console.log(dob);
    return this.authHttp.get('api/employees/' + id + '/' + dob )
                    .map(response => response.json())
                    .toPromise();
  }

  verifyEmployees(id: number, obj: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.authHttp.post('api/employees/verify/' + id, obj , headers);
  }

  reVerifyEmployees(id: number, surname: string) {
    return this.authHttp.get('api/employeesbyname/' + id + '/' + surname )
  }

  getEmployeeSecurity(id: number) {
    return this.authHttp.get('api/employeesecurity/' + id )
          .map(response => response.json())
  }
}
