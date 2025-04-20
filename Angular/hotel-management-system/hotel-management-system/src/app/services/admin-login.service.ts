import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private _url = 'http://localhost:8081/admin/login'; 

  constructor(private http: HttpClient) {}

  login(credentials: any ): Observable<any> {
    return this.http.post(this._url, credentials);
  }
}
