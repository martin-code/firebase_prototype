import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sitelatest',
  templateUrl: './sitelatest.component.html',
  styleUrls: ['./sitelatest.component.css']
})

export class SitelatestComponent implements OnInit {

  siteId: number;   // ID of the Site to get right data from database
  private sub: any;

  messages_display: Observable<any>;
  messages_ref: AngularFireList<any>;

 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public db: AngularFireDatabase) 
  { 

  }

  ngOnInit() {
    // MB_TODO: same method as in 'siteinfo.component'. maybe theres a better way not to have duplicated code
    // Get parent ActivatedRoute of this route.
    
    this.sub = this.route.parent.params.subscribe(params => {
      // This code will be executed when a change in param is detected (user selected another site in sitelist menu on left side)
      this.siteId = +params["id"];    // extract parameter id from route
      this.readDB();                  // read from database with new site id
    });
    
  }

  readDB(){
    this.messages_ref = this.db.list(this.siteId + '/Messages');
    this.messages_display = this.db.list(this.siteId+ '/Messages').valueChanges();
  }

  sendTextToDB(user_in: string){

    var message = {
      text: user_in,
    };

    this.messages_ref.push(message);
    console.log("try to send: ", message);
  }

  clearTextMessages(){
    this.messages_ref.remove();
  }

}
