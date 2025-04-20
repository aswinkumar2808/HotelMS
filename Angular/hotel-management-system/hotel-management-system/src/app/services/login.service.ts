import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _url = 'http://localhost:8081/login'; 

  constructor(private http: HttpClient) {}

  login(credentials: any ): Observable<any> {
    return this.http.post(this._url, credentials);
  }
}
