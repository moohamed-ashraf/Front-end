import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InactiveService } from './core/services/inactive/inactive.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Speedo-app-transfer';
  constructor(private inactive: InactiveService) {}
}
