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
      // @ts-ignore
      if ('Extra-Small' === x || 'Small' === x || 'Medium' === x) {
        this.mobileNavCol = 'col-2';
        this.mobileNav = true;
      } else {
        this.mobileNavCol = 'invisible';
        this.mobileNav = false;
      }
      console.log(x, this.mobileNavCol)
    });

    this.navService.mobileNavStatus$.subscribe((x) => {
      this.navStatus = x;
      x ? this.mobileNavCol = 'col-2' : this.mobileNavCol = 'invisible';
    })
  }

  toggleNav() {
    this.navService.toggleMobileNav();

  }
}
