import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ReceptionGuard implements CanActivate {
  constructor(private cookieService:AuthService,
              private route:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.cookieService.isExists()){
      return true;
    }
    else{
      this.route.navigateByUrl('/reception-login');
      return false;
    }
  }
}
