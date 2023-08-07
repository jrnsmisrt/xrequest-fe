import {Component, OnInit} from '@angular/core';
import {HttpService} from "../service/http.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xrequest-fe';
  xrequests: Observable<any[]> = of([]);

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.xrequests = this.httpService.getAllRequests();
  }
}
