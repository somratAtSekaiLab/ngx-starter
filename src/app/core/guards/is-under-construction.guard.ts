import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
} from '@angular/router';

/**
 * Is under construction guard
 */
@Injectable()
export class IsUnderConstructionGuard implements CanActivate {
  /**
   * Constructor
   * @param router
   */
  constructor(
    private router: Router) {}

  /**
   * Can activate
   */
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.router.navigate(['/under-construction']);
      return resolve(false);
    });
  }
}
