import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private backendUrl = ''
  constructor(private http: HttpClient) {
    this.backendUrl = environment.localBackend;
  }

  getAllRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/xrequests`);
  }

  getAllAuthors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/xrequests/authors`)
  }
}
