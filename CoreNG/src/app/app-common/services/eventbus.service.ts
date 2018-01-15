import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/from';
import { CurrentUser } from './../../../models/currentuser.model';

@Injectable()
export class EventBusService {

  constructor() { }

  private currentUser = new Subject<CurrentUser>();
  getCurrentUserObservable = Observable.from(this.currentUser);

  broadcastCurrentUser(currentUser: CurrentUser) {
    this.currentUser.next(currentUser);
  }

}
