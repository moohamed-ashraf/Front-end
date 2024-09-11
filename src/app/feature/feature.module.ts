import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  imports: [CommonModule, FeatureRoutingModule],
  // Remove FeatureComponent from declarations and exports
})
export class FeatureModule {}
