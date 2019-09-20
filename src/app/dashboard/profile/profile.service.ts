import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env';

/**
 * Profile service
 */
@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  /**
   * Constructor
   * @param http
   */
  constructor(
    private http: HttpClient
  ) {

  }

}
