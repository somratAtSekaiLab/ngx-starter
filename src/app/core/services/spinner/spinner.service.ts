import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Spinner service
 */
@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  /**
   * Loading
   */
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /**
   * Start loading
   */
  start() {
    this.loading.next(true);
  }

  /**
   * Stop loading
   */
  stop() {
    this.loading.next(false);
  }

  /**
   * Loading status
   */
  status(): Observable<boolean> {
    return this.loading;
  }
}
