import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env';

/**
 * Auth Service
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Constructor
   * @param http
   */
  constructor(
    private http: HttpClient,
  ) {}

  /**
   * Email Login
   * @param credential
   * @param rememberMe
   */
  login(credential) {
    return this.http.post(`${env.api}/login`, credential);
  }

  /**
   * Get user info
   */
  getMe(): Observable<any> {
    return this.http.get(`${env.api}/users/me`);
  }


}
