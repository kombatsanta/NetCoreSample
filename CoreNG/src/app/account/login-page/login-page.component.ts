import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './../../app-common/services/auth.service';
import { CurrentUserService } from './../../app-common/services/currentuser.service';
import { CurrentUser } from './../../../models/currentuser.model';
import { EventBusService } from './../../app-common/services/eventbus.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html'
})

export class LoginPageComponent implements OnInit {

  public user: CurrentUser;

  constructor(private authService: AuthService,
    private currentUserService: CurrentUserService,
    private eventBusService: EventBusService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = new CurrentUser();
  }

  onLogin() {
    this.authService.login(this.user).subscribe(data => {
      if (data == true) {
        this.currentUserService.loadCurrentUser().subscribe(data => {
          this.eventBusService.broadcastCurrentUser(this.currentUserService.currentUser);
          this.router.navigate(['/home']);
        });
      } else {
        this.currentUserService.reset();
        this.eventBusService.broadcastCurrentUser(this.currentUserService.currentUser);
      }
    });
    
  }

  onLogout() {
    this.currentUserService.reset();
    this.authService.logout();
    this.eventBusService.broadcastCurrentUser(this.currentUserService.currentUser);
  }

  onSubmit() {

  }

}
