import {Component, OnInit} from '@angular/core';
import {map, Observable, of, take} from "rxjs";
import {XRequest} from "../../interface/XRequest";
import {Author} from "../../interface/author";
import {HttpService} from "../../service/http.service";
import {SearchService} from "../../service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../enum/xrequest-category";

@Component({
  selector: 'xrequest-overview',
  templateUrl: './xrequest-overview.component.html',
  styleUrls: ['./xrequest-overview.component.css']
})
export class XrequestOverviewComponent implements OnInit {
  private paramCategory: Category = Category.NONE;
  protected readonly length = length;

  xrequests: Observable<XRequest[]> = of([]);
  authors: Observable<Author[]> = of([]);

  imgHeight = '100%';
  imgWidth = '200%';
  listLength = 0;
  page = 1;
  pageSize = 5;

  constructor(private httpService: HttpService,
              private searchService: SearchService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.xrequests = this.httpService.getAllRequests().pipe(take(1), map((requests) => {
      requests.forEach((request) => {
        this.httpService.getAuthorById(request.author).subscribe(x => {
          request.authorData = x;
        });
      });

      const finalRequests: XRequest[] = this.setOverviewFromParams(requests);
      this.listLength = finalRequests.length;

      return finalRequests;
    }));

    this.authors = this.httpService.getAllAuthors().pipe(take(1));
  }


  setSearchResult() {
    this.searchService.$xRequestSearchResult.pipe(map(x => x.resultRequest)).subscribe((x) => {
      this.xrequests = of(x);
      this.listLength = x.length;
    });
  }

  setOverviewFromParams(dataSet: XRequest[]): XRequest[] {
    let finalDataSet: XRequest[] = dataSet;

    this.activatedRoute.queryParams.subscribe((params) => {
      if (!!params['category']) {
        if (params['category']?.toUpperCase() != Category.NONE) {
          this.paramCategory = params['category'];
          finalDataSet = this.searchService.filterListByCategory(this.paramCategory, dataSet);
        }
      }
    });

    return finalDataSet;
  }
}
