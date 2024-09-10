import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  years: number[] = [];
  constructor(private fb: FormBuilder) {
    this.generateYears();
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryId: ['', Validators.required],
      day: ['', [Validators.required, Validators.min(2), Validators.max(2)]],
      month: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(2), Validators.max(4)]],
      password: [
        '',
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/),
      ],
    });
  }

  submit() {
    console.log(this.registerForm.value);

    alert('form has been submitted..');
  }
  generateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year);
    }
  }
}
