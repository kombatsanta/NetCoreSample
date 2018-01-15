import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule.forRoot(),
    AccountRoutingModule,
    FormsModule,
  ],
  declarations: [LoginPageComponent]
})
export class AccountModule { }
