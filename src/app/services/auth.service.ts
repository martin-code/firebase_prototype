import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, router: Router) {
      this.user = firebaseAuth.authState;
    }
  
  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
  
}