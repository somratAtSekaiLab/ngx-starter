import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest, HttpHandler,
  HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment as env } from '@env';
import { SessionService } from '@app/core/services';

/**
 * Response interceptor
 */
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  /**
   * @ignore
   */
  constructor(
    private injector: Injector) { }

  /**
   * Intercept
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.create(observer => {
      next.handle(request).subscribe(
        (value) => {
          observer.next(value);
        },
        (err) => {
          if (400 > err.status) {
            return observer.next(new HttpResponse());
          } else if (err.status === 401 || err.status === 403) {
            const session = this.injector.get(SessionService);
            session.logout();
            window.location.replace(`${env.baseUrl}/login`);
          } else if (err.status === 500) {
            const router = this.injector.get(Router);
            const params = {
              code: err.status
            };
            router.navigate(['/error'], { queryParams: params });
          } else {
            observer.error(err);
          }
        });
    });
  }
}
