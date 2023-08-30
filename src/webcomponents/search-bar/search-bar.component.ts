import {Component, Input, OnInit, Output} from '@angular/core';
import {XRequest} from "../../interface/XRequest";
import {SearchService} from "../../service/search.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'xrequest-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerms: string = '';
  @Input() dataSet: Observable<XRequest[]> = of([]);
  @Output() result: { resultRequest: XRequest[], hits: number } = {resultRequest: [], hits: 0};

  fromDataSet: XRequest[] = [];

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.dataSet.subscribe(x => this.fromDataSet = x);
  }

  search() {
    this.result = this.searchService.searchDataSetForString(this.searchTerms, this.fromDataSet);
  }
}
