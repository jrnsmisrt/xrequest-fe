import {Component, OnInit} from '@angular/core';
import {HttpService} from "../service/http.service";
import {Observable, of} from "rxjs";
import {XRequest} from "../interface/XRequest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'XRequests ~ enjoy life - do good';
  xrequests: Observable<XRequest[]> = of([]);

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.xrequests = this.httpService.getAllRequests();
  }
}
