import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppCommonConst } from './../app-common.const'
import { CurrentUser } from './../../../models/currentuser.model';

@Injectable()
export class CurrentUserService {

  public currentUser: CurrentUser = null;
  constructor(private http: HttpClient, private api: AppCommonConst) { }

  reset() {
    this.currentUser = null;
  }

  loadCurrentUser(): Observable<any> {
    if (this.currentUser == null) {
      return this.http.get<CurrentUser>(this.api.PROFILE).map(data => {
        this.currentUser = data
      }, err => {
        this.currentUser = null;
      });
    }
  }

}
