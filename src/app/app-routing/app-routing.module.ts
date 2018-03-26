import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { ContentComponent } from '../views/private/_parents/content/content.component';
import { SiteparentComponent } from '../views/private/_parents/siteparent/siteparent.component';
import { SitelistComponent } from '../views/private/sitelist/sitelist.component';
import { SiteinfoComponent } from '../views/private/siteinfo/siteinfo.component';
import { SitelatestComponent } from '../views/private/sitelatest/sitelatest.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent, 
    // MB_TODO: diese Route (mit allen Child-Routes) sperren falls nicht authentifiziert
    // canActivate: [???]
    children:[
      { path: ':id',
        component: SiteparentComponent, 
        children:[
          { path: '', redirectTo: 'latest', pathMatch: 'full' },
          { path: 'latest', component: SitelatestComponent },
          { path: 'info', component: SiteinfoComponent }
        ]
      }
    ]
  }
];


@NgModule({
  exports: [ RouterModule ],

  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
