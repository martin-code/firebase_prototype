import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/authentification/auth.service';
import { AuthGuard } from './services/authentification/auth-guard.service';

// MB: My Components
import { ContentComponent } from './views/private/_parents/content/content.component';
import { SiteparentComponent } from './views/private/_parents/siteparent/siteparent.component';
import { SitelistComponent } from './views/private/sitelist/sitelist.component';
import { SiteinfoComponent } from './views/private/siteinfo/siteinfo.component';
import { SitelatestComponent } from './views/private/sitelatest/sitelatest.component';
import { HeaderComponent } from './views/private/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    SitelistComponent,
    SiteinfoComponent,
    SitelatestComponent,
    SiteparentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'prototype'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
