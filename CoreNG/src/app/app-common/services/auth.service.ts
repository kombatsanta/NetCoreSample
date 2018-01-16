import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppCommonConst } from './../app-common.const';
import { CurrentUser } from './../../../models/currentuser.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private api: AppCommonConst) { }

  public login(user: CurrentUser): Observable<boolean> {
    localStorage.removeItem("token");
    //let params = new HttpParams().append("username", userName).append("password", pwd);

    //let options = {
    //  params: params
    //}

    return this.http.post<any>(this.api.TOKEN_URL, user)
      .map(token => {
        localStorage.setItem("token", token.token);
        return true;
      }, err => {
        console.log("nu blev det error", err);
        return false;
      });

  }

  public register(user: CurrentUser) {

    return this.http.post<any>(this.api.TOKEN_URL + "/register", JSON.stringify(user))
      .map(data => {
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
