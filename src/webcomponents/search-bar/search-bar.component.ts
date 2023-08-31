import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {XRequest} from "../../interface/XRequest";
import {SearchService} from "../../service/search.service";
import {BehaviorSubject, Observable, of} from "rxjs";

@Component({
  selector: 'xrequest-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private _searchPerformed$ = new BehaviorSubject<boolean>(false);
  searchTerms: string = '';
  hits = 0;

  @Input() dataSet: Observable<XRequest[]> = of([]);
  @Output() result = new EventEmitter<{ resultRequest: XRequest[], hits: number }>();

  fromDataSet: XRequest[] = [];

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.dataSet.subscribe(x => this.fromDataSet = x);
  }

  search() {
    this._searchPerformed$.next(true);
    const result = this.searchService.searchDataSetForString(this.searchTerms, this.fromDataSet);
    this.hits = result.hits;

    this.result.emit(result);
  }

  get searchPerformed$(): Observable<boolean> {
    return this._searchPerformed$.asObservable();
  }
}
