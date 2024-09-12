import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationWrapperComponent } from './components/authentication-wrapper/authentication-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationWrapperComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
