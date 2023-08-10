import {Component} from '@angular/core';
import {NavigationService} from "../../service/navigation.service";

@Component({
  selector: 'xrequest-navmobile',
  templateUrl: './navmobile.component.html',
  styleUrls: ['./navmobile.component.css']
})
export class NavmobileComponent {

  constructor(private navService: NavigationService) {
  }

  toggleNav() {
    this.navService.toggleMobileNav();
  }
}
