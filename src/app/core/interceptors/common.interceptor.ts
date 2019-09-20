import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@env';

/**
 * HTTP interceptor to control common header parameters
 */
@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  /**
   * Interceptor add content type
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers       = request.headers;
    const contentType = headers.get('Content-Type');

    if (contentType === 'EXCLUDE') {
      headers = headers.delete('Content-Type');
      request = request.clone({ headers });
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept-Language': env.lang
      }
    });

    return next.handle(request);
  }
}
