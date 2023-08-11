import {Component, Input} from '@angular/core';
import {menuItemList} from "../MenuItemList";

@Component({
  selector: 'xrequest-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() mobileNav = true;
  @Input() menuItems = menuItemList;
}
