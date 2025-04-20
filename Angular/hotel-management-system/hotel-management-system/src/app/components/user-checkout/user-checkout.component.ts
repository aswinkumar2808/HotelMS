import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-user-checkout',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './user-checkout.component.html',
})
export class UserCheckoutComponent {
  user: any = JSON.parse(localStorage.getItem('user') || '{}');
  reservation: any = JSON.parse(localStorage.getItem('reservation') || '{}');
  rooms: any = JSON.parse(localStorage.getItem('rooms') || '{}');
  
  customerName = this.user.loginId;
  roomNumber: any = null; 

  stayDuration = this.calculateStayDuration(this.reservation.checkInDate, this.reservation.checkOutDate);

  roomCharge = 4500;
  serviceCharge = 1200;
  totalAmount = this.roomCharge + this.serviceCharge;

  constructor(private router: Router) {
    console.log(this.reservation);
    console.log(this.rooms);
    console.log(this.stayDuration);

    this.rooms.forEach((room: any) => {
      if (room.reservationId === this.reservation.reservationId) {
        console.log('Room Number:', room.roomNumber);
        this.roomNumber = room.roomNumber;
      }
    });

    console.log('Room Number in Constructor:', this.roomNumber);
  }

  // Function to calculate stay duration based on check-in and check-out dates
  calculateStayDuration(checkInDate: string, checkOutDate: string): number {
    if (!checkInDate || !checkOutDate) return 0;
    
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    
    const duration = Math.floor((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24)); // Days
    return duration > 0 ? duration : 0; 
  }

  goToPayment() {
    const billId = this.reservation.billId || '123'; 
    this.router.navigate([`/billing/${billId}/pay`]);
  }
}
