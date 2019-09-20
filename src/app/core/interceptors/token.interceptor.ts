import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { SessionService } from '@app/core/services';
/**
 * Token interceptor
 */
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  /**
   * @ignore
   */
  constructor(
    private injector: Injector
  ) {
  }

  /**
   * Intercept
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers         = request.headers;
    const authorization = headers.get('Authorization');

    if (authorization) {
      if (authorization === 'EXCLUDE') {
        headers = headers.delete('Authorization');
        request = request.clone({ headers });
      }
      return next.handle(request);
    }

    /* initiate session service */
    const sessionService = this.injector.get(SessionService);

    return new Observable((observer) => {

      sessionService
        .getAccessToken()
        .subscribe(token => {
            observer.next(token);
            observer.complete();
          },
          err => {
            observer.next(null);
            observer.complete();
          });
      }).pipe(mergeMap(token => {
        if (token) {
          request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
          });
        }
        return next.handle(request);
      }));
  }
}
