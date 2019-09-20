import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { LoginComponent } from './login/login.component';


/**
 * Module routes
 */
const routes: Routes = [{
  path: '',
  component: LoginComponent,
  data: {
    title: 'Login',
  },
}];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginModule { }
