import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {XrequestModule} from "../xrequest/xrequest.module";
import {NavigationModule} from "../navigation/navigation.module";
import { NavmobilemenuComponent } from '../navigation/navmobilemenu/navmobilemenu.component';
import {WebComponentsModule} from "../webcomponents/web-components.module";

@NgModule({
  declarations: [
    AppComponent,
    NavmobilemenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    XrequestModule,
    NavigationModule,
    WebComponentsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
