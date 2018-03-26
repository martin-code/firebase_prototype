import { Component, OnInit } from '@angular/core';
import { Site } from './site';

@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent implements OnInit {

  sites: Site[] = [
    { id: 1, name: 'Auhausen' },
    { id: 2, name: 'Geilsheim' },
    { id: 3, name: 'Stöck' },
    { id: 4, name: 'Langwiesental' },
    { id: 5, name: 'Berlin Heide' },
    { id: 6, name: 'Berlin Heide II' },
    { id: 7, name: 'Rheinland' },
    { id: 8, name: 'Gardasee' },
    { id: 9, name: 'Oettinger Forst' },
    { id: 10, name: 'Oettinger Forst II' },
    { id: 11, name: 'Oettinger Forst III' },
    { id: 12, name: 'Seglohe' },
    { id: 13, name: 'Auhausen Badeweiher' },
    { id: 14, name: 'Lohe' },
    { id: 15, name: 'Schwarzald West' },
    { id: 16, name: 'Schwarzald Ost' },
    { id: 17, name: 'Schwarzald Süd' },
    { id: 18, name: 'Roßfeld' },
    { id: 19, name: 'Brandenburg Heide' },
    { id: 20, name: 'Brandenburg Heide II' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
