import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {XRequest} from "../interface/XRequest";
import {Author} from "../interface/author";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private backendUrl = ''

    constructor(private http: HttpClient) {
        this.backendUrl = environment.localBackend;
    }

    getAllRequests(): Observable<XRequest[]> {
        return this.http.get<XRequest[]>(`${this.backendUrl}/xrequests`);
    }

    getAllAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>(`${this.backendUrl}/xrequests/authors`)
    }

    getAuthorById(id: string): Observable<Author> {
        return this.http.get<Author>(`${this.backendUrl}/xrequests/authors/${id}`);
    }

    postRequest(xrequest: XRequest): Observable<XRequest> {
      return this.http.post<XRequest>(`${this.backendUrl}/xrequests/${xrequest.id}`,xrequest)
    }
}

