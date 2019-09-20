import { Routes } from '@angular/router';
import { IsLoggedOutGuard } from '@app/core';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/login/login.module#LoginModule',
    canActivate: [IsLoggedOutGuard]
  }, {
    path: 'registration',
    loadChildren: './auth/registration/registration.module#RegistrationModule',
    canActivate: [IsLoggedOutGuard]
  }
];
