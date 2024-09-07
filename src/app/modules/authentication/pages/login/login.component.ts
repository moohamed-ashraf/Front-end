import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
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
  loginpObj: any = {
    email: '',
    password: '',
  };
}
