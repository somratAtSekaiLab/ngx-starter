import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { authRoutes } from '../page/auth/auth.routing';
import * as pageComponents from '../page/components';


const routes: Routes = [{
  path: '',
  component: pageComponents.LayoutComponent,
  children: [{
    path: '',
    component: pageComponents.HomeComponent
  },
  ...authRoutes]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageRoutingModule { }
