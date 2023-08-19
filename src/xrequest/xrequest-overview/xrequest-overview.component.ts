import {Component, OnInit} from '@angular/core';
import {map, Observable, of, take} from "rxjs";
import {XRequest} from "../../interface/XRequest";
import {Author} from "../../interface/author";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'xrequest-overview',
  templateUrl: './xrequest-overview.component.html',
  styleUrls: ['./xrequest-overview.component.css']
})
export class XrequestOverviewComponent implements OnInit{
  xrequests: Observable<XRequest[]> = of([]);
  authors: Observable<Author[]> = of([]);
  imgHeight = '100%';
  imgWidth = '200%';

  constructor(private httpService: HttpService) {
  }
  ngOnInit(): void {
    this.xrequests = this.httpService.getAllRequests().pipe(take(1), map((requests) => {
      requests.forEach((request) => {
        this.httpService.getAuthorById(request.author).subscribe(x => {
          request.authorData = x;
        });
      });
      return requests;
    }));
    this.authors = this.httpService.getAllAuthors().pipe(take(1));
  }
}
