import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenService } from '../components/service/tokenService/token.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private tokenStorageService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.headers.get('noauth')) {
      return next.handle(req.clone());
    } else {
      const clonedreq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.tokenStorageService.getToken())
      });
      return next.handle(clonedreq).pipe(
        tap(
          event => { },
          err => {
            if (err.error.auth === false) {
              this.router.navigate(['login']);
            }
          })
      );
    }
  }
}
