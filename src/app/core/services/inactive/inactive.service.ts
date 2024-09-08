import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutComponent } from '../../../modules/authentication/pages/logout/logout.component';
@Injectable({
  providedIn: 'root',
})
export class InactiveService {
  private timeout: any;
  private readonly inactivityLimit = 1 * 60 * 1000;
  constructor(private ngZone: NgZone, private router: Router) {
    this.startMonitoring();
  }
  private startMonitoring() {
    this.resetTimer();

    window.addEventListener('mousemove', () => this.resetTimer());
    window.addEventListener('keydown', () => this.resetTimer());
    window.addEventListener('scroll', () => this.resetTimer());
    window.addEventListener('click', () => this.resetTimer());
  }

  private resetTimer() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(
      () => this.handleInactivity(),
      this.inactivityLimit
    );
  }

  private handleInactivity() {
    this.ngZone.run(() => {
      this.router.navigate(['auth/logout']);
    });
  }
}
