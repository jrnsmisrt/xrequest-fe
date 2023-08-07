import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private backendUrl = ''
  constructor(private http: HttpClient) {
    this.backendUrl = environment.localBackend;
  }

  getAllRequests(): any {
    return this.http.get<any[]>(`${this.backendUrl}/xrequests`);
  }
}
