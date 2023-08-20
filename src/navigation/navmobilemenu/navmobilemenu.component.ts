import {Component, Input} from '@angular/core';
import {MenuItem} from "../../interface/menu-item";

@Component({
    selector: 'app-navmobilemenu',
    templateUrl: './navmobilemenu.component.html',
    styleUrls: ['./navmobilemenu.component.css']
})
export class NavmobilemenuComponent {

    @Input() navStatus = false;
    @Input() mobileNavCol = '';
    @Input() menuItemList: MenuItem[] = [];
}
