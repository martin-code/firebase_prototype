import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';


@Injectable()
export class AuthService {

  authState: any = null;
  user_id: any = null;
  user_email: string;
  isLoggedIn = false;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.authState.subscribe((auth) => {
      this.authState = auth
  });
    
  }

  get userMail(){
    return this.user_email;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) { 
      return 'unknown'; 
    }
    //else if (this.currentUserAnonymous) { return 'Anonymous' }
    else { 
      return this.authState.name || 'ging nicht';
    }
  }

  isAuthenticated(): Observable<boolean>{
    console.log('AUTH-SERVICE: isAuthenticated(): check if user is authenticated');
       
    return this.firebaseAuth.authState.map(auth => {
      if (auth && auth.uid) {
        console.log('AUTH-SERVICE: isAuthenticated(): user is authenticated');
        return true
      } else {
        console.log('AUTH-SERVICE: isAuthenticated(): user is not authenticated');
        this.router.navigate(['/login']);
        return false
      }
    })
  }


  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.isLoggedIn = true;
        this.user_id = user.id;
        console.log('AUTH-SERVICE: login(): Login successful, User ID = ' + user.uid);

        // redirect to content now
        this.router.navigate(['content']);
      })
      .catch(error => console.log(error));
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.isLoggedIn = false;
        
    // redirect to content now
    this.router.navigate(['login']);

  }

}