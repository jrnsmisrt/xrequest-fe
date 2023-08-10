import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../service/navigation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'XRequests ~ enjoy life - do good';
  navStatus = false;
  mobileNav = true;
  mobileNavCol = 'col-2';


  constructor(private navService: NavigationService) {
  }

  ngOnInit() {
    this.navService.currentWindowSize$.subscribe((x) => {
      if (x !== 'Extra-Small') {
        this.mobileNavCol = 'invisible';
      }
      if (x !== 'Small') {
        this.mobileNavCol = 'invisible';
      }
      console.log(x)
    });
  }

  toggleNav() {
    this.navStatus = !this.navStatus;
    this.mobileNavCol = 'col-2'
  }
}
