import {Component, OnInit} from '@angular/core';
import {HttpService} from "../service/http.service";
import {map, Observable, of, take} from "rxjs";
import {XRequest} from "../interface/XRequest";
import {Author} from "../interface/author";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'XRequests ~ enjoy life - do good';
    navStatus = false;
    mobileNav = true;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
    }

    toggleNav() {
        this.navStatus = !this.navStatus;
    }
}
