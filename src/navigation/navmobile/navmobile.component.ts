import {Component, Input} from '@angular/core';
import {NavigationService} from "../../service/navigation.service";
import {MenuItem} from "../../interface/menu-item";

@Component({
    selector: 'xrequest-navmobile',
    templateUrl: './navmobile.component.html',
    styleUrls: ['./navmobile.component.css']
})
export class NavmobileComponent {
    menuLabel = 'menu';

    @Input() menuItems: MenuItem[] = [];

    constructor(private navService: NavigationService) {
    }

    toggleNav() {
        this.navService.toggleMobileNav();
        this.navService.mobileNavStatus$.subscribe((x) => {
            x ? this.menuLabel = 'menu_open' : this.menuLabel = 'menu';
        });
    }
}
