import {Routes} from "@angular/router";
import {AppComponent} from "../app/app.component";
import {HomeComponent} from "../app/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'requests', component: HomeComponent}
]
