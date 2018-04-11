import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentification/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_id: any;

  constructor(public authService: AuthService,) { }

  ngOnInit() {
  }

  logout() {
    console.log('Logging out');
    this.authService.logout();
  }

}
