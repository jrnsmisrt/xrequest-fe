import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XrequestOverviewComponent } from './xrequest-overview/xrequest-overview.component';
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
    declarations: [
        XrequestOverviewComponent
    ],
    exports: [
        XrequestOverviewComponent
    ],
    imports: [
        CommonModule,
        NgbPagination
    ]
})
export class XrequestModule { }
