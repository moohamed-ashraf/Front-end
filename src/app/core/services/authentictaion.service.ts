import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthentictaionService {
  constructor(private http: HttpClient) {}

  register(payload: any) {
    return this.http.post('tempRegisterURL', payload);
  }

  login(payload: any) {
    return this.http.post('tempLoginURL', payload);
  }
}
