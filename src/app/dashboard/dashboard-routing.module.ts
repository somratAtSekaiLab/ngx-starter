import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '@app/dashboard/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component : LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
