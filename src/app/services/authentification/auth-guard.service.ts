import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { AuthService }      from './auth.service';
import { Observable } from 'rxjs/Observable';

/*
Martin Burkhardt
Code from https://angular.io/guide/router#canactivate-requiring-authentication
*/ 

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private as: AuthService) {}


    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean>  {
      console.log('AUTH-GUARD-SERVICE: canActivate(): check if user is permettid to access the route')

      // Function isAuthenticated in AuthService returns observable of AuthState and provides result false or true asynchronous
      //  after firebase server returned answer of authentification
      return this.as.isAuthenticated();
    }
}
