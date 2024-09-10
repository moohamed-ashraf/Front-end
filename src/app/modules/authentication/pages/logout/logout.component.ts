import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {
  faexclamationCircle = faExclamationCircle;
  faEye = faEyeSlash;
}
