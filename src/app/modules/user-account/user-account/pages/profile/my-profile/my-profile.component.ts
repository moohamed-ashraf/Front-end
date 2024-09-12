import { Component } from '@angular/core';
import { ContentComponent } from '../../../components/content/content.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {}
