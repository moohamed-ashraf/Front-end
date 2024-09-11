import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MobileApplicationComponent } from './mobile-application/mobile-application.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MobileApplicationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NavbarComponent, FooterComponent, MobileApplicationComponent],
})
export class SharedModule {}
