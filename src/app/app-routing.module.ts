import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsDevOnlyGuard, IsLoggedInGuard } from './core';
import { PageModule } from './page';

import * as pageComponents from './page/components';

const routes: Routes = [{
  path: 'static',
  loadChildren: './static/static.module#StaticModule',
  canActivate: [IsDevOnlyGuard]
}, {
  path: '',
  loadChildren: './page/page.module#PageModule'
}, {
  path: 'dashboard',
  loadChildren: './dashboard/dashboard.module#DashboardModule',
  canActivate: [IsLoggedInGuard]
}, {
  path: 'error',
  component: pageComponents.ErrorComponent,
  data: {
    title: '',
  },
}, {
  path: 'under-construction',
  component: pageComponents.UnderConstructionComponent,
  data: {
    title: '',
  },
}, {
  path: '**',
  component: pageComponents.PageNotFoundComponent,
  data: {
    title: '404',
  },
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
