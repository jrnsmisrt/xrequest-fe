import {Component, Input} from '@angular/core';

@Component({
  selector: 'xrequest-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() mobileNav = true;
}
