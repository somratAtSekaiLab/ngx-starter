import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@env';
/**
 * Registration Service
 */
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  /**
   * Constructor
   * @param http
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Signup
   * @param credential
   */
  signup(credential): Observable<any> {
    return this.http
      .post(`${env.api}/signup`, credential);
  }

}
