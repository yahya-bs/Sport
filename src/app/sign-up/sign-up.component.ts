import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.minLength(5)],
      lastName: ['', Validators.minLength(5)],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
      confirmPwd: ['', [Validators.required, Validators.minLength(8)]],
      number: ['', [Validators.maxLength(8) , Validators.minLength(8)]]
    });
  }

  signUp() {
    alert('btn clicked');
  }

}
