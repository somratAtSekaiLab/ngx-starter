import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsDevOnlyGuard, IsLoggedInGuard } from './core';
import { PageModule } from './page';

import * as pageComponents from './page/components';

const routes: Routes = [{
  path: 'static',
  loadChildren: () => import('./static/static.module').then(m => m.StaticModule),
  canActivate: [IsDevOnlyGuard]
}, {
  path: '',
  loadChildren: () => import('./page/page.module').then(m => m.PageModule)
}, {
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
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
