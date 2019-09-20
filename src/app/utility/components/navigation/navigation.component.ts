import { Component, OnInit, Input } from '@angular/core';
import { SessionService, Roles } from '@app/core';
import { environment as env } from '@env';

/**
 * Navigation
 */
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  /**
   * Logged in flag
   */
  isLoggedIn: boolean;
  /**
   * Logged user
   */
  user: any;

  /**
   * User roles
   */
  roles = Roles;

  /**
   * Dashboard flag
   */
  @Input() isDashboard: boolean;

  /**
   * Constructor
   * @param session
   */
  constructor(
    private session: SessionService
  ) {
    this.session
        .getAuth()
        .subscribe(user => {
          this.user       = user;
          this.isLoggedIn = true;
        }, () => {});
  }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Logout
   */
  logOut() {
    this.session.logout();
    window.location.replace(`${env.baseUrl}/login`);
  }

}
