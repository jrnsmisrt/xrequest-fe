import {Component, OnInit} from '@angular/core';
import {map, Observable, of, take} from "rxjs";
import {XRequest} from "../../interface/XRequest";
import {Author} from "../../interface/author";
import {HttpService} from "../../service/http.service";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'xrequest-overview',
  templateUrl: './xrequest-overview.component.html',
  styleUrls: ['./xrequest-overview.component.css']
})
export class XrequestOverviewComponent implements OnInit {
  xrequests: Observable<XRequest[]> = of([]);
  authors: Observable<Author[]> = of([]);
  imgHeight = '100%';
  imgWidth = '200%';
  listLength = 0;
  page = 1;
  pageSize = 5;

  constructor(private httpService: HttpService, private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.xrequests = this.httpService.getAllRequests().pipe(take(1), map((requests) => {
      requests.forEach((request) => {
        this.httpService.getAuthorById(request.author).subscribe(x => {
          request.authorData = x;
        });
      });
      this.listLength = requests.length;
      return requests;
    }));
    this.authors = this.httpService.getAllAuthors().pipe(take(1));
    this.searchService.$xRequestSearchResult.pipe(map(x => x.resultRequest)).subscribe((x) =>{
      console.log(x);
    });
  }

  protected readonly length = length;

  setSearchResult(result: { resultRequest: XRequest[], hits: number }) {
    // this.xrequests = of(result.resultRequest);
    console.log(result);
    this.xrequests = this.searchService.$xRequestSearchResult.pipe(map(x => x.resultRequest));
  }
}
