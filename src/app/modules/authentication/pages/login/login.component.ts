import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    country: '',
    password: '',
  };
  loginObj: any = {
    email: '',
    password: '',
  };

  constructor() {
    console.log('works-login');
  }
}
