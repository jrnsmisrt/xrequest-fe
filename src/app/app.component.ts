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
    mobileNav = false;
    mobileNavCol = 'col-nav-closed';


    constructor(private navService: NavigationService) {
    }

    ngOnInit() {
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
