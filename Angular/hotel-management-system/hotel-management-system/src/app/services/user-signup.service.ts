import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {
  private _url  = "http://localhost:8081/signup";
  constructor(private http: HttpClient) { }
  signup(userDetails:any) : Observable<any>{
    return this.http.post(this._url,userDetails);
  }
}
