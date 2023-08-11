import {Component, Input} from '@angular/core';
import {MenuItem} from "../../interface/menu-item";

@Component({
    selector: 'xrequest-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    @Input() menuItems: MenuItem[] = [];
}
