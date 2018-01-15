import { Component, OnInit } from '@angular/core';
import { CurrentUser } from './../../../models/currentuser.model';
import { AuthService } from './../../app-common/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent implements OnInit {

  public user: CurrentUser;

  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.user = new CurrentUser();
  }

  onRegister() {
    this.authService.register(this.user).subscribe(data => {
      if (data == true) {
        this.router.navigate(['/account/login']);
      }
    });
  }

}
