import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sitelatest',
  templateUrl: './sitelatest.component.html',
  styleUrls: ['./sitelatest.component.css']
})
export class SitelatestComponent implements OnInit {

  siteId: number;
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute) 
  { }

  ngOnInit() {
    // MB_TODO: same method as in 'siteinfo.component'. maybe theres a better way not to have duplicated code
    // Get parent ActivatedRoute of this route.
    this.sub = this.route.parent.params.subscribe(params => {
      this.siteId = +params["id"];
    });
  }

}
