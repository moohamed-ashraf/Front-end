import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
