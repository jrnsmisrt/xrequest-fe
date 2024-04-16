import {Component} from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  formFields = [
    {
      label: 'nickname or firstname/lastname',
      element: 'input',
      type: 'text'
    },
    {
      label: 'phonenumber',
      element: 'input',
      type: 'tel'
    },
    {
      label: 'email',
      element: 'input',
      type: 'email'
    },
    {
      label: 'request',
      element: 'textarea',
      type: 'text'
    }
  ]
}
