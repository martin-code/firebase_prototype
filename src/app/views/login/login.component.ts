import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) { }

  login() {
    this.router.navigate(['content']);
    
    /*
    MB_TODO: firebase authentification not working
    this.authService.login(this.email, this.password);
    
    .then((res) => { 
      this.router.navigate(['content'])
    })

    this.email = this.password = '';    
    */
  }

  logout() {
    this.authService.logout();
  }
}
