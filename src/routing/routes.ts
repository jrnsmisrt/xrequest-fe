import {Routes} from "@angular/router";
import {HomeComponent} from "../app/home/home.component";
import {CreateComponent} from "../app/create/create.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'x', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: '**', component: HomeComponent}
]

export enum categoryRoutes {
  FEMALE4MALE = '/x?category=female4male',
  FEMALE4FEMALE = '/x?category=female4female',
  FEMALE4COUPLE = '/x?category=female4couple',
  FEMALE4X = '/x?category=female4x',
  MALE4FEMALE = '/x?category=male4female',
  MALE4MALE = '/x?category=male4male',
  MALE4COUPLE = '/x?category=male4couple',
  MALE4X = '/x?category=male4x',
  COUPLE4FEMALE = '/x?category=couple4female',
  COUPLE4MALE = '/x?category=couple4male',
  COUPLE4COUPLE = '/x?category=couple4couple',
  COUPLE4X = '/x?category=couple4x',
  X4FEMALE = '/x?category=x4female',
  X4MALE = '/x?category=x4male',
  X4X = '/x?category=x4x',
  X4COUPLE = '/x?category=x4couple',
  BDSMFETISHKINK = '/x?category=bdsmfetishkink',
  NONSEXUAL = '/x?category=nonsexual',
}
