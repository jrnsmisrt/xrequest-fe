import {Component, Input} from '@angular/core';
import {MenuItem} from "../../interface/menu-item";

@Component({
  selector: 'app-navmobilemenu',
  templateUrl: './navmobilemenu.component.html',
  styleUrls: ['./navmobilemenu.component.css']
})
export class NavmobilemenuComponent {
  toggled: { id: number, status: boolean } = {id: 0, status: true};

  @Input() navStatus = false;
  @Input() mobileNavCol = '';
  @Input() menuItemList: MenuItem[] = [];

  toggleAccordion(i: number, toggle: boolean) {
    this.toggled = {id: i, status: !toggle}
  }
}
