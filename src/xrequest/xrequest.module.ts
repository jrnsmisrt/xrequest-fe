import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XrequestOverviewComponent } from './xrequest-overview/xrequest-overview.component';



@NgModule({
    declarations: [
        XrequestOverviewComponent
    ],
    exports: [
        XrequestOverviewComponent
    ],
    imports: [
        CommonModule
    ]
})
export class XrequestModule { }
