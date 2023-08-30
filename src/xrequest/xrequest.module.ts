import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XrequestOverviewComponent } from './xrequest-overview/xrequest-overview.component';
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {WebComponentsModule} from "../webcomponents/web-components.module";



@NgModule({
    declarations: [
        XrequestOverviewComponent
    ],
    exports: [
        XrequestOverviewComponent
    ],
    imports: [
        CommonModule,
        NgbPagination,
        WebComponentsModule
    ]
})
export class XrequestModule { }
