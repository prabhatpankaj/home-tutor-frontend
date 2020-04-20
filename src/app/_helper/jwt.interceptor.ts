import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    if (authorization && authorization.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authorization.token}`
        }
      });
    }

    return next.handle(request);
  }
}
