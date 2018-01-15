import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonConst } from './app-common.const';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppCommonModule,
      providers: [AppCommonConst]
    };
  }
}
