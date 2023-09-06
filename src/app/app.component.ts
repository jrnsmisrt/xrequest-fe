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
  ngOnInit(): void {
  }

}
