import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let authenticate = AuthService.isAuthenticated;
        if(authenticate){
            return true;
        } else {
            this.router.navigate(['/login']) ;
        }
        return false;
    }
}