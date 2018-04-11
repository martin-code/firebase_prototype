import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/authentification/auth.service';
import { RealtimeDbService } from '../../../services/realtime_db/realtime-db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_id: any;
  user_name: string;

  constructor(public authService: AuthService) { 
    this.user_name = this.authService.currentUserDisplayName;
  }

  ngOnInit() {
  }

  logout() {
    console.log('Logging out');
    this.authService.logout();
  }

}
