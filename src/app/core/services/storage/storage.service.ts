import { Injectable } from '@angular/core';
import {
  CookieService as ngxCookieService,
  CookieOptions } from 'ngx-cookie';

import { environment as env } from '@env';
import { storageKey } from '@app/core/types';

/**
 * Declare cookie options
 */
const options: CookieOptions = {
  path: '/',
  domain: env.cookie.domain,
  expires: null
};
/**
 * Declare prefix
 */
const prefix = `${env.cookie.name}_${env.envName}`;

/**
 * Storage service to manage local storage for app
 */
@Injectable()
export class StorageService {
  /**
   * Constructor
   * @param cookie
   */
  constructor(
    private cookie: ngxCookieService
  ) { }

  /**
   * Get value by key
   * @param key
   */
  get(key: storageKey): any {
    return this.cookie.get(`${prefix}_${key}`);
  }

  /**
   * Set value by key
   */
  set(key: storageKey, val: any): void {
    this.cookie.put(`${prefix}_${key}`, val, options);
  }
  /**
   * Get object
   * @param key
   */
  getObject(key: storageKey): any {
    return this.cookie.getObject(`${prefix}_${key}`);
  }
  /**
   * Set Object
   * @param key
   * @param value
   */
  setObject(key: storageKey, value: object): void {
    this.cookie.putObject(`${prefix}_${key}`, value, options);
  }

  /**
   * Remove value by key
   */
  remove(key: storageKey): void {
    this.cookie.remove(`${prefix}_${key}`, options);
  }
  /**
   * Remove all
   */
  removeAll(): void {
    this.cookie.removeAll(options);
  }
  /**
   * Get all
   */
  getAll(): any {
    return this.cookie.getAll();
  }
}
