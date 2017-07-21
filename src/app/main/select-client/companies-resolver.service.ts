import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Injectable()
export class CompaniesResolver implements Resolve<Company[]> {
  constructor(private companyService: CompanyService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<Company[]> | Promise<Company[]> | Company[] {
    return this.companyService.getAllCompanies();
  }
}
