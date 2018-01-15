import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppToolbarService, MenuItem } from './app-toolbar/app-toolbar.service';
import { CurrentUserService } from './app-common/services/currentuser.service';
import { EventBusService } from './app-common/services/eventbus.service';
import { CurrentUser } from './../models/currentuser.model';
import { AuthService } from './app-common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  mainMenuItems;
  activeMenuItem$: Observable<MenuItem>;
  public currentUser: CurrentUser = null;

  constructor(private toolbarService: AppToolbarService,
    private eventBusService: EventBusService,
    private currentUserService: CurrentUserService,
    private authService: AuthService) {

    this.mainMenuItems = this.toolbarService.getMenuItems();
    this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
    eventBusService.getCurrentUserObservable.subscribe(data => {
      this.currentUser = data;
    });

  }

  ngOnInit() {
  }

  onLogout() {
    this.currentUserService.reset();
    this.authService.logout();
    this.eventBusService.broadcastCurrentUser(this.currentUserService.currentUser);
  }

}
