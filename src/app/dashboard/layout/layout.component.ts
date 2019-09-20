import { Component, OnInit } from '@angular/core';
import { SessionService } from '@app/core';
import { environment as env } from '@env';

/**
 * Layout component
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  /**
   * User me
   */
  user: any;

  /**
   * Constructor
   * @param session
   */
  constructor(
    private session: SessionService
  ) {
    this.session
        .getAuth()
        .subscribe( user => {
          this.user = Object.assign({}, user);
        });
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
