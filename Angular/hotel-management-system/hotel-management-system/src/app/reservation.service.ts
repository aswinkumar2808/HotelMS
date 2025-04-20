import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL: string = "http://localhost:8081/reservations";

  private baseURL2: string = "http://localhost:8081/employee";

  constructor(private httpClient: HttpClient) { }

  getReservationList(): Observable<Reservation[]>
  {
    return this.httpClient.get<Reservation[]>(`${this.baseURL}`);
  }

  createReservation(reservation:Reservation): Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`, reservation);
  }

  getReservationByUserId(userId: number): Observable<Reservation[]>
  {
    return this.httpClient.get<Reservation[]>(`${this.baseURL2}/${userId}`);
  }

  updateReservation(id: number, employee: Reservation): Observable<Reservation>
  {
    return this.httpClient.put<Reservation>(`${this.baseURL2}/${id}`, employee);
  }

  deleteReservationById(id: number): Observable<object>
  {
    return this.httpClient.delete<Reservation>(`${this.baseURL2}/${id}`);
  }
}
