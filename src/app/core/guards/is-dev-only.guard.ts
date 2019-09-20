import { Injectable } from '@angular/core';
import { environment as env } from '@env';
import {
  Router,
  CanActivate,
} from '@angular/router';

/**
 * Is dev only guard
 */
@Injectable()
export class IsDevOnlyGuard implements CanActivate {
  /**
   * Constructor
   * @param router
   */
  constructor(
    private router: Router) {}

  /**
   * @ignore
   */
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {

      if (env.envName === 'local' || env.envName === 'dev') {
        return resolve(true);
      }

      this.router.navigate(['/']);
      return resolve(false);
    });
  }
}
