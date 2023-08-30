import {Injectable} from '@angular/core';
import {XRequest} from "../interface/XRequest";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  $xRequestSearchResult: Observable<{ resultRequest: XRequest[], hits: number }> = of({resultRequest: [], hits: 0});

  constructor() {
  }

  searchDataSetForString(input: string, dataSet: XRequest[]): { resultRequest: XRequest[], hits: number } {
    let hits = 0;
    let copySet = dataSet;
    const inputMapped = input.toLowerCase();
    console.log(copySet);

    const resultSet: XRequest[] = copySet.filter((request) => {
      console.log('hello');
      const tempResult = [];

      if (request.title?.toLowerCase().includes(inputMapped)) {
        tempResult.push(request);
        hits++;
      }
      if (request.content?.toLowerCase().includes(inputMapped)) {
        tempResult.push(request);
        hits++;
      }
      if (request.authorData?.name?.toLowerCase().includes(inputMapped)) {
        tempResult.push(request);
        hits++;
      }
      if (request.authorData?.nickName?.toLowerCase().includes(inputMapped)) {
        tempResult.push(request);
        hits++;
      }
      if (request.authorData?.email?.toLowerCase().includes(inputMapped)) {
        tempResult.push(request);
        hits++;
      }
      return tempResult;
    });

    console.log(resultSet);
    const reducedResultSet: XRequest[] = [...new Set(resultSet)];
    console.log(reducedResultSet);
    console.log(hits);

    this.$xRequestSearchResult = of({resultRequest: reducedResultSet, hits: hits});
    return {resultRequest: reducedResultSet, hits: hits};
  }
}
