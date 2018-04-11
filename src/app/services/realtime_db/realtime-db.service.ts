import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class RealtimeDbService {

  constructor(private db: AngularFireDatabase) { }


  /* 
  Datenbankzugriffe in Service ausleiten. Diesen Service sollen dann alle Module nutzen. Funktionen im Service:
          o "GetSiteList"
          o "GetSiteHistory"
          o "GetSiteInfo"
          o "SaveNewMessage"

  */

  

}
