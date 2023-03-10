import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 
    constructor(
      private router: Router,
      private authenticationService:AuthenticationService
    ) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const currentUser = this.authenticationService.currentUserValue;
      if(currentUser){
        // authorized so return true
        return true;
      }
  
      // not logged in so redirect to login page
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
