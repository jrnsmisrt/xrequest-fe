import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NavmobileComponent} from './navmobile/navmobile.component';
import {NgbAccordionModule, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    NavbarComponent,
    NavigationComponent,
    NavmobileComponent
  ],
  exports: [
    NavbarComponent,
    NavigationComponent,
    NavmobileComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbDropdown,
    NgbAccordionModule
  ],
})
export class NavigationModule {
}
