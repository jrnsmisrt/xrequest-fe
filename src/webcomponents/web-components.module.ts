import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {FormsModule} from "@angular/forms";
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [SearchBarComponent, LoaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchBarComponent, LoaderComponent]
})
export class WebComponentsModule {
}
