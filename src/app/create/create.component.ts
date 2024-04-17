import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  maxContentChars = 500;
  minNameChars = 2;
  maxPhoneChars = 20;

  createForm: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(this.minNameChars)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.maxLength(this.maxPhoneChars)),
    content: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(this.maxContentChars)]),
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  createRequest() {
    console.log(this.createForm.value, this.createForm.valid);

    this.createForm.markAllAsTouched();
    if (this.createForm.valid) {
      console.log('form is valid');

    }
  }

  get name(){
    return this.createForm.get('name');
  }

  get email(){
   return this.createForm.get('email');
  }

  get phoneNumber(){
    return this.createForm.get('phoneNumber');
  }

  get content(){
    return this.createForm.get('content');
  }
}
