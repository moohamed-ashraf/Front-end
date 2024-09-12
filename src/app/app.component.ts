import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from "./modules/home/pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeModule, SharedModule, HomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Speedo-app-transfer';
}
