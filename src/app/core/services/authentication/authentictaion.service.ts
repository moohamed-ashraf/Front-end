import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private timeout: any;
  private readonly inactivityLimit = 2 * 60 * 1000;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {}

  register(payload: any) {
    return this.http.post('tempRegisterURL', payload);
  }

  login(payload: any) {
    return this.http.post('tempLoginURL', payload);
  }
  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate([this.login]);
  }
}
