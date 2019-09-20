import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { environment as env } from '@env';
import { StorageService } from '@app/core/services/storage/storage.service';
import { userRole } from '@app/core/types';

/**
 * Session Service to manage application session
 */
@Injectable()
export class SessionService {
  /**
   * Constructor
   * @param http
   * @param storage
   */
  constructor(
    private http: Http,
    private storage: StorageService
  ) { }

  /**
   * Returns valid access token
   */
  getAccessToken(): Observable<string> {
    return new Observable(observer => {

      /* If we already have a valid access token in storage */
      const token = this.storage.get('access_token');
      if (token && this.isTokenValid(token)) {
        observer.next(token);
        observer.complete();
        return;
      }

      /* If we already have a refresh token, try to get a new access token */
      const refreshToken = this.storage.get('refresh_token');

      if (refreshToken && this.isTokenValid(refreshToken)) {
        return  this.requestAccessToken(refreshToken)
                    .subscribe((data) => {
                      this.seed(data);
                      observer.next(data.access_token);
                      return observer.complete();
                    }, (err) => {
                      observer.error('Token not found');
                      return observer.complete();
                    });
      }
      observer.error('Token not found');
      observer.complete();
    });
  }

  /**
   * Request access token using refresh token
   * @param refreshToken
   */
  requestAccessToken(refreshToken): Observable<any> {

    const body = {
      refresh_token: refreshToken
    };

    return this.http
      .post(`${env.api}/login/refresh-token`, body)
      .pipe(map(res => res.json()));
  }


  /**
   * Checks is token valid or not
   * @param token
   */
  private isTokenValid(token: string): boolean {

    const now = Date.now() / (1000 * 60);
    const data = this.decodeToken(token);

    if (data && data.exp) {
      const expiry = data.exp / 60;
      return expiry > now;
    }

    return false;
  }

  /**
   * Decode token
   * @param token
   */
  decodeToken(token: string): any {
    return jwt_decode(token);
  }

  /**
   * Seed token & expiry informations in storage from authentication response
   * @param data
   */
  seed(data: any): void {

    if (data.access_token) {
      this.storage.set('access_token', data.access_token);
    }

    if (data.refresh_token) {
      this.storage.set('refresh_token', data.refresh_token);
    }

    if (data.expires_in) {
      this.storage.set('expires_in', data.expires_in);
    }
  }

  /**
   * Seed account data
   * @param account
   */
  seedAccount(account: any): void {
    this.storage.setObject('account', account);
  }

  /**
   * Logout
   */
  logout() {
    this.storage.remove('access_token');
    this.storage.remove('refresh_token');
    this.storage.remove('expires_in');
    this.storage.remove('account');
  }

  /**
   * Clear all
   */
  clear() {
    this.storage.removeAll();
  }

  /**
   * Get auth data
   */
  getAuth(): Observable<object> {
    return this.getAccessToken()
               .pipe(map(token => this.getAccount(token)));
  }

  /**
   * Get logged account data
   */
  private getAccount(token) {
    if (!token) { return; }
    const account = this.storage.getObject('account');

    return account;
  }

  /**
   * Get authenticated user role
   * @param role
   */
  hasRole(role: userRole): boolean {
    const roles = this.storage.getObject('account') ? this.storage.getObject('account').roles : [];
    if (roles.indexOf(role) === -1) {
      return false;
    }
    return true;
  }

}
