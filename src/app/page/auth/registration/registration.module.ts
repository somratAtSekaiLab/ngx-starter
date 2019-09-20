import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { RegistrationComponent } from './registration/registration.component';


/**
 * Module routes
 */
const routes: Routes = [{
  path: '',
  component: RegistrationComponent,
  data: {
    title: 'Registration',
  },
}];

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class RegistrationModule { }
