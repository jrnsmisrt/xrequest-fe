import {Injectable} from '@angular/core';
import {XRequest} from "../interface/XRequest";
import {BehaviorSubject, Observable} from "rxjs";
import {LoadingService} from "./loading.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  get $xRequestSearchResult(): Observable<{ resultRequest: XRequest[], hits: number }> {
    return this._$xRequestSearchResultSubj.asObservable();
  }

  // $xRequestSearchResult: Observable<{ resultRequest: XRequest[], hits: number }> = of({resultRequest: [], hits: 0});
  private _$xRequestSearchResultSubj = new BehaviorSubject<{
    resultRequest: XRequest[],
    hits: number
  }>({resultRequest: [], hits: 0});

  constructor(private loadingService: LoadingService) {
  }

  searchDataSetForString(input: string, dataSet: XRequest[]): { resultRequest: XRequest[], hits: number } {
    this.loadingService.isLoading$ = true;
    let hits = 0;
    let copySet = dataSet;
    const inputMapped = input.toLowerCase();
    console.log(copySet);
    const resultSet: XRequest[] = [];

    copySet.forEach((request) => {
      if (request.title?.toLowerCase().includes(inputMapped)) {
        resultSet.push(request);
        hits++;
      }
      if (request.content?.toLowerCase().includes(inputMapped)) {
        resultSet.push(request);
        hits++;
      }
      if (request.authorData?.name?.toLowerCase().includes(inputMapped)) {
        resultSet.push(request);
        hits++;
      }
      if (request.authorData?.nickName?.toLowerCase().includes(inputMapped)) {
        resultSet.push(request);
        hits++;
      }
      if (request.authorData?.email?.toLowerCase().includes(inputMapped)) {
        resultSet.push(request);
        hits++;
      }
    });

    const reducedResultSet: XRequest[] = [...new Set(resultSet)];

    this._$xRequestSearchResultSubj.next({resultRequest: reducedResultSet, hits: hits});
    this.loadingService.isLoading$ = false;
    return {resultRequest: reducedResultSet, hits: hits};
  }

  sortListByCategory(category: string){

  }
}
