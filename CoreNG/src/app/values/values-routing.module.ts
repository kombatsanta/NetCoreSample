import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValuesPageComponent } from './values-page/values-page.component';

const routes: Routes = [{
  path: 'values',
  component: ValuesPageComponent,
  data: {
    title: 'Values',
    icon: 'fa fa-bluetooth fw'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValuesRoutingModule { }
