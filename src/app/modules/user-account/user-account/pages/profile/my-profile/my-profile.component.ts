import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
  imgSrc = '/public/img/Screenshot 2024-09-09 153846.png';
}
