import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {
  @Input()
  multiple: boolean = false;
  @Input()
  accept: string = '*';
  @Input()
  uLimit: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}
