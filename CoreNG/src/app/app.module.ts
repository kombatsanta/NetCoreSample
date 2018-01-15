import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app-common/auth.interceptor';
import { FormsModule } from '@angular/forms';

import { AppCommonModule } from './app-common/app-common.module';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { ValuesModule } from './values/values.module';
import { ValuesRoutingModule } from './values/values-routing.module';

import { AppComponent } from './app.component';
import { AppToolbarService } from './app-toolbar/app-toolbar.service';
import { AuthService } from './app-common/services/auth.service';
import { CurrentUserService } from './app-common/services/currentuser.service';
import { ValuesService } from './values/values.service';

import { EventBusService } from './app-common/services/eventbus.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    HomeRoutingModule,
    ValuesModule,
    ValuesRoutingModule,
    AccountModule,
    AccountRoutingModule,
    AppCommonModule.forRoot(),
    RouterModule.forRoot([{
      path: '', redirectTo: '/home', pathMatch: 'full'
    }])
  ],
  providers: [AppToolbarService,
    AuthService,
    CurrentUserService,
    ValuesService,
    EventBusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
