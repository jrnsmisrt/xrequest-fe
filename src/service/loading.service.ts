import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }

  set isLoading$(value: boolean) {
    this._isLoading$.next(value);
  }

  private _isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }
}
