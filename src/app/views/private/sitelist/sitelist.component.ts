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
  
  listRefOcc: AngularFireList<any>;
  listRefNotOcc: AngularFireList<any>;

  listOcc: Observable<any>;
  listNotOcc: Observable<any>;

  list_occ: any;
  list_notocc: any;

  constructor(db: AngularFireDatabase) { 
    /*
      Quering lists: https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md
      Multiple Quering lists: https://angularfirebase.com/lessons/multi-property-data-filtering-with-firebase-and-angular-4/
    */
    db.list('/sites', ref => ref.orderByChild('occupied').equalTo('true')).valueChanges().subscribe(sites_occ => {
      this.list_occ = sites_occ;
    });
    db.list('/sites', ref => ref.orderByChild('occupied').equalTo('true')).valueChanges().subscribe(sites_occ => {
      this.list_notocc = sites_occ;
    });
    
  }


  ngOnInit() {
  }

  sortList(){


  }

}
