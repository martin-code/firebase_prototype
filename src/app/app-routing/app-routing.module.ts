import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { ContentComponent } from '../views/private/_parents/content/content.component';
import { SiteparentComponent } from '../views/private/_parents/siteparent/siteparent.component';
import { SitelistComponent } from '../views/private/sitelist/sitelist.component';
import { SiteinfoComponent } from '../views/private/siteinfo/siteinfo.component';
import { SitelatestComponent } from '../views/private/sitelatest/sitelatest.component';
import { AuthGuard } from '../services/authentification/auth-guard.service';

const routes: Routes = [
  // MB: we directly try to go to content on starting the application. The AuthGuard will handle unauthorized users and send them to login page
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent, 
    // content area should only be accesable when authentification is successful
    canActivate: [AuthGuard],
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
