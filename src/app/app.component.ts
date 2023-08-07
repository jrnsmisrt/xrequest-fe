import {Component, OnInit} from '@angular/core';
import {HttpService} from "../service/http.service";
import {map, Observable, of, take} from "rxjs";
import {XRequest} from "../interface/XRequest";
import {Author} from "../interface/author";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'XRequests ~ enjoy life - do good';
    xrequests: Observable<XRequest[]> = of([]);
    authors: Observable<Author[]> = of([]);

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.xrequests = this.httpService.getAllRequests().pipe(take(1), map((requests) => {
            requests.forEach((request) => {
                this.httpService.getAuthorById(request.author).subscribe(x => {
                    request.authorData = x;
                });
            });
            return requests;
        }));
        this.authors = this.httpService.getAllAuthors().pipe(take(1));
    }
}
