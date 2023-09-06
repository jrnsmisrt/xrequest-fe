import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {NavigationService} from "../../service/navigation.service";
import {LoadingService} from "../../service/loading.service";
import {MenuItem} from "../../interface/menu-item";
import { menuItemList } from 'src/navigation/MenuItemList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  readonly menuItemList: MenuItem[] = menuItemList;

  loading$: Observable<boolean> = new Observable<boolean>();

  title = 'XRequests ~ enjoy life - do good';
  navStatus = false;
  mobileNav = false;
  mobileNavCol = '';


  constructor(private navService: NavigationService, private loaderService: LoadingService) {
  }

  ngOnInit() {
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
