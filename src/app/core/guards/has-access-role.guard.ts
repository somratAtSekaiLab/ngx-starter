import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionService } from '@app/core/services';
import { Roles } from '@app/core/enums';


/**
 * If user has admin or user role
 */
@Injectable()
export class HasAccessRoleGuard implements CanActivate {
  /**
   * Constructor
   * @param router
   * @param session
   */
  constructor(
    private router: Router,
    private session: SessionService) {}

  /**
   * Can activate
   */
  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (
       this.session.hasRole(Roles.ADMIN) || this.session.hasRole(Roles.USER)
      ) {
        return resolve(true);
      }
      this.router.navigate(['/']);
      return resolve(false);
    });
  }
}
