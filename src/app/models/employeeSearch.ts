export class EmployeeSearch {
    callerType: number;
    employeeSurname: string;
    employeeDob: string;
    VerifyEmployee: any;
    ReVerifyEmployee: any;
    constructor() {
       this.callerType = 0;
       this.VerifyEmployee = [];
       this.ReVerifyEmployee = [];
    }
}
