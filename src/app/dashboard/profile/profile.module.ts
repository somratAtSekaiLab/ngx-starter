import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { MyProfileComponent } from './my-profile/my-profile.component';

/**
 * Module routes
 */
const routes: Routes = [{
  path: '',
  component: MyProfileComponent
}, {
  path: 'profile',
  component: MyProfileComponent,
}];

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
