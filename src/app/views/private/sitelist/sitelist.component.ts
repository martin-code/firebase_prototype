import { Component, OnInit } from '@angular/core';
import { Site } from './site';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { RealtimeDbService } from '../../../services/realtime_db/realtime-db.service';

class SiteTEST {
  constructor(public name) { }
}

@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent implements OnInit {
  
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) { 
    // bind items to realtime db
    this.items = db.list('sites').valueChanges();

  }

  ngOnInit() {
  }

}
