import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {FormsModule} from "@angular/forms";
import {LoaderComponent} from './loader/loader.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [SearchBarComponent, LoaderComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchBarComponent,
    LoaderComponent,
    DynamicFormComponent]
})
export class WebComponentsModule {
}
