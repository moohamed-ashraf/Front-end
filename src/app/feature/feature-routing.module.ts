import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FeatureComponent } from './feature.module'; // Adjust the path as needed

const routes: Routes = [
  { path: '', component: FeatureComponent },
  // Add more routes here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
