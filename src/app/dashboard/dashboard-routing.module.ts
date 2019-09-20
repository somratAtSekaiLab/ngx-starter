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
        loadChildren: './profile/profile.module#ProfileModule',
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
