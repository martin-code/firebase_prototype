import { Component } from '@angular/core';
import { AuthService } from '../../services/authentification/auth.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) { 

    
  }


  login() {
    this.authService.login(this.email, this.password);
    
    // MB_TODO: wann sollen die zurückgesetzt werden? hier ist noch nicht klar ob der login funktioniert oder nicht, da dieser vorgang asynchron ist
    //this.email = this.password = '';  

  }

}
