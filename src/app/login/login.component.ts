import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgProgressService } from 'ngx-progressbar';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    error = '';
    loading = false;

    constructor( private router: Router,
                 private authService: AuthService,
                 private progress: NgProgressService
                 ) {}

    ngOnInit() {
        // reset login status
        this.authService.logout();
    }

    login() {
      this.loading = true;
      this.progress.start();
      this.authService.login(this.model.username, this.model.password)
              .subscribe(result => {
              if (result === true) {
                  this.router.navigate(['main/select-client']);
                  this.progress.done();
              } else {
                  this.error = 'username or password is incorrect';
                    this.loading = false;
                    this.progress.done();
              }
              }, err => {
                  this.error = 'username or password is incorrect';
                        this.loading = false;
                        this.progress.done();
              });
    }
}
