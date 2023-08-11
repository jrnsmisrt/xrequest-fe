import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavmobileComponent } from './navmobile/navmobile.component';
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
    declarations: [
        NavbarComponent,
        NavigationComponent,
        NavmobileComponent
    ],
  exports: [
    NavbarComponent,
    NavigationComponent
  ],
    imports: [
        CommonModule,
        NgbDropdownMenu,
        NgbDropdownToggle,
        NgbDropdown
    ],
})
export class NavigationModule { }
