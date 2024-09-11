import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, RouterModule],
})
export class HomeModule {}
