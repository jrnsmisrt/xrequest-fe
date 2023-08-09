import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'XRequests ~ enjoy life - do good';
  navStatus = false;
  mobileNav = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleNav() {
    this.navStatus = !this.navStatus;
  }
}
