import {Component, Input, OnInit, Output} from '@angular/core';
import {XRequest} from "../../interface/XRequest";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() searchTerms: string = '';
  @Input() dataSet: XRequest[] = [];
  @Output() resultSet: XRequest[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
