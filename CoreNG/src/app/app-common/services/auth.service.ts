import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppCommonConst } from './../app-common.const'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private api: AppCommonConst) { }

  public login(userName: string, pwd: string): Observable<boolean> {
    localStorage.removeItem("token");
    let params = new HttpParams().append("username", userName).append("password", pwd);

    let options = {
      params: params
    }

    return this.http.post<any>(this.api.TOKEN_URL, null, options)
      .map(token => {
        localStorage.setItem("token", token.token);
        return true;
      }, err => {
        return false;
      });

  }

  getAuthorizationToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
  }

}
