import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppCommonConst } from './../app-common/app-common.const'

@Injectable()
export class ValuesService {

  constructor(private http: HttpClient, private api: AppCommonConst) { }

  public getValues() {
    return this.http.get<any>(this.api.VALUES_URL);
  }

  public getValuesSecure() {
    return this.http.get<any>(this.api.VALUES_URL + "/secure");
  }

}
