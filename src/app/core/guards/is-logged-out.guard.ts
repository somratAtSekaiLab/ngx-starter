import { Injectable } from '@angular/core';
import {
  Router, CanActivate,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '@app/core/services';

/**
 * Is logged out guard
 */
@Injectable()
export class IsLoggedOutGuard implements CanActivate {
  /**
   * Constructor
   * @param router
   * @param session
   */
  constructor(
    private router: Router,
    private session: SessionService) { }

 /**
  * Can active
  * @param next
  * @param state
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.session
        .getAccessToken()
        .subscribe(token => {
            resolve(false);
            this.router.navigate(['/dashboard']);
          }, err => {
            resolve(true);
        });
    });
  }
}
