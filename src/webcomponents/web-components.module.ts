import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {FormsModule} from "@angular/forms";
import {LoaderComponent} from './loader/loader.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [SearchBarComponent, LoaderComponent, DynamicFormComponent, FileuploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
    exports: [SearchBarComponent,
        LoaderComponent,
        DynamicFormComponent, FileuploaderComponent]
})
export class WebComponentsModule {
}
