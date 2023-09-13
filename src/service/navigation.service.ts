import {Injectable} from '@angular/core';
import {BehaviorSubject, fromEvent, map, Observable} from "rxjs";
import {WindowSize} from "../enum/window-size";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _mobileNavStatus$ = new BehaviorSubject<boolean>(false);
  private _windowWidth$ = new BehaviorSubject<number>(0);
  private _currentWindowSize$ = new BehaviorSubject<string>('SM');

  constructor() {
    this.setWindowSize(window.innerWidth);

    fromEvent(window, 'resize')
      .pipe(map((y) => {
        const s = y.target as Window;
        return s.innerWidth;
      }))
      .subscribe((x) => {
        this.setWindowSize(x);
      });
  }

  toggleMobileNav() {
    const current = this._mobileNavStatus$.value;
    this._mobileNavStatus$.next(!current);
  }

  get mobileNavStatus$(): Observable<boolean> {
    return this._mobileNavStatus$.asObservable();
  }

  get windowWidth$(): Observable<number> {
    return this._windowWidth$.asObservable();
  }

  get currentWindowSize$(): Observable<string> {
    return this._currentWindowSize$.asObservable();
  }

  private setWindowSize(size: number) {
    if (size < 320) {
      this._currentWindowSize$.next(WindowSize.XS.toString());
    } else if (size >= 320 && size < 640) {
      this._currentWindowSize$.next(WindowSize.SM.toString());
    } else if (size >= 640 && size < 1007) {
      this._currentWindowSize$.next(WindowSize.M.toString());
    } else if (size >= 1007 && size < 1920) {
      this._currentWindowSize$.next(WindowSize.L.toString());
    } else if (size >= 1920) {
      this._currentWindowSize$.next(WindowSize.XL.toString());
    }
  }
}
