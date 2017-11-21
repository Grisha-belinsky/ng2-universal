import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppSetting } from '../app-setting';

@Injectable()
export class AuthService {
  private isBusy: boolean;
  constructor(
      private http: Http
  ) {
    this.isBusy = false;
  }

  login(username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(AppSetting.serviceBase + 'token',
        'grant_type=password&username=' + username + '&password=' + password + '&client_id=' + AppSetting.clientId, headers)
        .map((res: Response) => {
            let response = res.json();
            this.isBusy = true;
            localStorage.setItem('authorizationData',
                JSON.stringify({
                  token: response.access_token,
                  userName: username,
                  refreshToken: response.refresh_token }
                )
            );

          let expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + 15);
          let data = { token: response.access_token,
            userName: username,
            refreshToken: response.refresh_token,
            signalToken: '&perId=' + response.perId + '&compId=' + response.compId
          };
          document.cookie = `${'authData'}=${data}; ${'expires'}${expireDate}`;
        });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('authorizationData');
  }

  register(registration: any) {
    this.logout();
    this.isBusy = true;
    return this.http.post(AppSetting.serviceBase + 'api/account/register', registration)
        .map(res => res.json());
  };

  forget(email: string) {
      return this.http.post(AppSetting.serviceBase + 'api/account/forgotpassword/', email)
          .map(res => res.json());
  }

  getConfirmation(id: string, code: string) {
      return this.http.get(AppSetting.serviceBase + 'api/account/confirmemail/' + id + '?code=' + code)
          .map(res => res.json());
  }

}
