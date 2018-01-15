import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';

import { ValuesRoutingModule } from './values-routing.module';
import { ValuesPageComponent } from './values-page/values-page.component';

//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AuthInterceptor } from './../app-common/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule.forRoot(),
    ValuesRoutingModule
  ],
  //providers: [{
  //  provide: HTTP_INTERCEPTORS,
  //  useClass: AuthInterceptor,
  //  multi: true,
  //}],
  declarations: [ValuesPageComponent]
})
export class ValuesModule { }
