import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppCommonModule.forRoot(),
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
