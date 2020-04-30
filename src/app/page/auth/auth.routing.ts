import { Routes } from '@angular/router';
import { IsLoggedOutGuard } from '@app/core';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [IsLoggedOutGuard]
  }, {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule),
    canActivate: [IsLoggedOutGuard]
  }
];
