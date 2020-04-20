import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { TokenService } from '../tokenService/token.service';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private myRoute: Router,private tokenService:TokenService) {
  }
  canActivate( next: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): boolean {
      if (!this.tokenService.isLoggedIn()) {
        this.myRoute.navigateByUrl('/login');
        return false;
      }
      return true;
  }
}
