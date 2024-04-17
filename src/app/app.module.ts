import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {XrequestModule} from "../xrequest/xrequest.module";
import {NavigationModule} from "../navigation/navigation.module";
import {NavmobilemenuComponent} from '../navigation/navmobilemenu/navmobilemenu.component';
import {WebComponentsModule} from "../webcomponents/web-components.module";
import {RouterModule} from "@angular/router";
import {routes} from "../routing/routes";
import {HomeComponent} from './home/home.component';
import { CreateComponent } from './create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NavmobilemenuComponent,
    HomeComponent,
    CreateComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            routes,
        ),
        HttpClientModule,
        NgbModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        XrequestModule,
        NavigationModule,
        WebComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
