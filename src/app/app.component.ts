import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../service/navigation.service";
import {menuItemList} from "../navigation/MenuItemList";
import {MenuItem} from "../interface/menu-item";
import {Observable} from "rxjs";
import {LoadingService} from "../service/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly menuItemList: MenuItem[] = menuItemList;

  loading$: Observable<boolean> = new Observable<boolean>();

  title = 'XRequests ~ enjoy life - do good';
  navStatus = false;
  mobileNav = false;
  mobileNavCol = '';

  constructor(private navService: NavigationService, private loaderService: LoadingService) {

  }

  ngOnInit(): void {
    this.loading$ = this.loaderService.isLoading$;
    this.navService.currentWindowSize$.subscribe((x) => {
      // @ts-ignore
      if ('Extra-Small' === x || 'Small' === x || 'Medium' === x) {
        this.mobileNav = true;
      } else {
        this.mobileNavCol = 'invisible';
        this.mobileNav = false;
      }
    });

    this.navService.mobileNavStatus$.subscribe((x) => {
      this.navStatus = x;
      x ? this.mobileNavCol = 'col-nav-open' : this.mobileNavCol = 'invisible';
    })
  }

}
