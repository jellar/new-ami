import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../services/company.service';
@Component({
  template: `
    <div class="card large grey lighten-4 z-depth-2">
      <div class="card-content">
        <span class="card-title"><h3>Client script</h3></span>
       <p [innerHtml]="companyScript"></p>
      </div>
      <div class="card-action">
        <button type="button" class="btn btn-secondary" (click)="back()">BACK</button>
        <button type="button" class="right btn btn-primary" (click)="next()">NEXT</button>
      </div>
    </div>
  `
})

export class ClientScriptComponent implements OnInit {
  // @Input() companyScript;
  companyScript: string ;
   constructor(private router: Router,
              private route: ActivatedRoute,
              private service: CompanyService) {
    console.log('client script componet')
  }

  ngOnInit() {
    // this.service.getCompanyScript(this.route.params.subscribe(params => params['companyId']))
    //           .subscribe( d => {
    //             this.companyScript = d;
    //           })
    this.route.params
        .map(params => params['companyId'])
        .switchMap(id => this.service.getCompanyScript(id))
        .subscribe(script => this.companyScript = script);
  }

  back() {
    this.router.navigate(['main/select-client']);
  }
  next() {
    this.router.navigate(['main/call-purpose']);
  }
}
