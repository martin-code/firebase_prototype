import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-siteinfo',
  templateUrl: './siteinfo.component.html',
  styleUrls: ['./siteinfo.component.css']
})
export class SiteinfoComponent implements OnInit, OnDestroy  {

  siteId: number;
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute) 
  {}


  ngOnInit() {

    //MB: When only a router parameter is changes but the base of the route stays the same, Angular reuses the component. 
    //ngOnInit() is only called once after a component is instantiated, but not when the route changes -> use subscribe!

    // Get parent ActivatedRoute of this route.
    this.sub = this.route.parent.params.subscribe(params => {
        this.siteId = +params["id"];
      });

    // In a real app: dispatch action to load the details here.

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
