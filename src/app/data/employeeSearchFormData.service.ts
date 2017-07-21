import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { EmployeeSearchFormData } from '../models/employeeSearchFormData.model';

@Injectable()
export class EmployeeSearchFormDataService {
  private formData: EmployeeSearchFormData = new EmployeeSearchFormData();
  getCompany() {
    const company: Company = {
      companyId: this.formData.companyId ? this.formData.companyId : null,
      companyName: this.formData.companyName
    };
    return company;
  }

  setCompany(data) {
    this.formData.companyId = data.companyId;
    this.formData.companyName = data.companyName;
  }

  getCallType() {
    return this.formData.callType ? this.formData.callType : 0;
  }
  setCallType(data) {
    this.formData.callType = data;
  }

  setVerifyEmployee(data) {
    this.formData.verifyEmployee = data;
  }
  getVerifyEmployee() {
    return this.formData.verifyEmployee ? this.formData.verifyEmployee : [];
  }

  setReVerifyEmployee(data) {
    this.formData.surname = data;
  }

  getReVerifyEmployee() {
    return this.formData.surname ? this.formData.surname : '';
  }
}
