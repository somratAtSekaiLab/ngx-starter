import { Injectable } from '@angular/core';

/**
 * Data Service
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * Initialize data object
   */
  private data: object = {};

  /**
   * @ignore
   */
  constructor() { }

  /**
   * Set data object
   * @param key
   * @param value
   */
  set(key, value): void {
    this.data[key] = value;
  }

  /**
   * Get data object by given key
   * @param key
   */
  get(key): any {
    return this.data[key];
  }

  /**
   * Remove data object by given key
   * @param key
   */
  remove(key): void {
    delete this.data[key];
  }

  /**
   * Clear data object
   */
  clear(): void {
    this.data = {};
  }
}
