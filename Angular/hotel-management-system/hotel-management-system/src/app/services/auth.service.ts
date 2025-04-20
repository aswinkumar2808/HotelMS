import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('user')|| '{}'));
  user$ = this.userSubject.asObservable();
  setUser(user: any){
    sessionStorage.setItem('user',JSON.stringify(user));
    this.userSubject.next(user);
  }
  clearUser(){
    sessionStorage.removeItem('user');
    this.userSubject.next(null);
  }
  constructor() { }
}
