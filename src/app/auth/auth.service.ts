import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { tokenNotExpired, JwtHelper, AuthHttp } from 'angular2-jwt';
import { Subject, Observable } from 'rxjs/Rx';


@Injectable()
export class AuthService {
  tokenEndpoint = environment.baseApiUrl + 'oauth/token';
  requireLoginSubject: Subject<boolean>;
  tokenIsBeingRefreshed: Subject<boolean>;
  constructor(private http: Http,
              private router: Router) {
    this.requireLoginSubject = new Subject<boolean>();
    this.tokenIsBeingRefreshed = new Subject<boolean>();
    this.tokenIsBeingRefreshed.next(false);
  }

  isAuthenticated() {
    if (this.loggedIn()) {
      this.requireLoginSubject.next(false);
      return true;
    } else {
      return false;
    }
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  login(username: string, password: string) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');

    return this.http.post(this.tokenEndpoint, body, options)
        .map(response => {
            const token = response.json() && response.json().access_token;
            if (token) {
                this.addTokens(response.json().access_token, response.json().refresh_token)
                localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                return true;
            }else {
                return false;
            }
        }).catch((e) => {
            return Observable.throw(
            new Error(`${ e.status } ${ e.statusText }`)
          );
        });
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('currentUser');
    this.requireLoginSubject.next(true);
  }

  refreshToken() {
    const refToken = localStorage.getItem('refresh_token');
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    const body = new URLSearchParams();
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', refToken);
    return this.http.post(this.tokenEndpoint, body, options)
                    .map(res => res.json())
  }

  tokenRequiresRefresh(): boolean {
    const token = localStorage.getItem('id_token');
    if (!this.loggedIn()) {
      console.log('Token refresh is required');
    }

    return !this.loggedIn();
  }

  private StoreToken(data) {
      const token = data.response.json() && data.response.json().access_token;
      if (token) {
          // set token property
          this.addTokens(data.response.json().access_token, data.response.json().refresh_token)
          localStorage.setItem('currentUser', JSON.stringify({username: 'username', token: token}));
          return true;
      }else {
          return false;
      }
  }

  addTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem('id_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  refreshTokenSuccessHandler(data) {
    if (data.error) {
        this.logout();
        this.requireLoginSubject.next(true);
        this.tokenIsBeingRefreshed.next(false);
        this.router.navigate(['/login']);
        return false;
    } else {
        this.addTokens(data.access_token, data.refresh_token);
        this.requireLoginSubject.next(false);
        this.tokenIsBeingRefreshed.next(false);
    }
  }

  refreshTokenErrorHandler(error) {
    this.requireLoginSubject.next(true);
    this.logout();
    this.tokenIsBeingRefreshed.next(false);
    this.router.navigate(['/login']);
    console.log(error);
  }
}
