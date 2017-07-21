import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { Http, HttpModule, RequestOptions, Response } from '@angular/http';

import { AUTH_PROVIDERS, AuthConfig, AuthHttp, provideAuth } from 'angular2-jwt';
import { NgProgressModule } from 'ngx-progressbar';
import { AppComponent } from './app.component';

import { AppErrorHandler } from './common/app-error-hanlder';
import { AboutComponent, HelloComponent } from './hello-world';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

import { SlidesComponent } from './slides/slides.component';
import { SlidesTestComponent } from './slides/slides-test/slides-test.component';
/**auth */
import { AuthService } from './auth/auth.service';
import { AuthHttpService } from './auth/auth-http.service';
import { AuthGuard } from './auth/auth.guard';
import { DataService } from './services/data.service';
import { LinksComponent } from './useful-links/links.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { routing } from './app.routing';
import { AbsenceModule } from './absence/absence.module';

const initialComponents = [
                          LoginComponent,
                          AppComponent,
                          CallbacksComponent,
                          LinksComponent,
                          ServiceOverviewComponent,
                          SlidesComponent,
                          SlidesTestComponent
                          ]

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
        tokenName: 'token',
        tokenGetter: (() =>  localStorage.getItem('id_token')),
        globalHeaders: [{'Content-Type': 'application/json'}],
    }), http, options);
}

@NgModule({
  declarations: initialComponents,
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgProgressModule,
    routing,
    MainModule,
    AbsenceModule,
    DynamicFormModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AuthHttpService,
    DataService,
    { provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http, RequestOptions]},
    { provide: ErrorHandler, useClass: AppErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
