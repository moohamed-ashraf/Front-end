import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeWrapperComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
