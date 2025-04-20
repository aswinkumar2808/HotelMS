import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../../reservation';
import { ReservationService } from '../../reservation.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  constructor(private reservationService:ReservationService, private route:Router){};

  reservation: Reservation = new Reservation();

  onSubmit(event:any)
  {
    console.log(event);
    this.insertReservation();

    console.log(this.reservation);

    // alert("noo?/");
     this.processReservation(event);
    
    
  }

  insertReservation()
  {
    this.reservationService.createReservation(this.reservation).subscribe(data=> {
      if(data){
        console.log(data);
        localStorage.setItem('reservation', JSON.stringify(data));
        //console.log(this.reservation);
      }
      this.goToReservationList();
      
      console.log(data);
      
    });
  }

  goToReservationList()
  {
    this.route.navigate(['/reservations']);
  }


  contactValidation(contact:any){
    const contactPattern = /^[0-9]{10}$/;
    return contactPattern.test(contact);
}

generateBookingId():string{
  return 'BOOK'+Math.floor(10000+Math.random()*9000).toString();
}

processReservation(event:any){  
  event.preventDefault();

  const form= document.getElementById("reservationForm")as HTMLFormElement;

  const checkin = (document.getElementById("checkin")as HTMLInputElement).value;
  const checkout = (document.getElementById("checkout")as HTMLInputElement).value;
  const roompreference = (document.getElementById("roompreference")as HTMLInputElement).value;
  const name = (document.getElementById("name")as HTMLInputElement).value;
  const contact = (document.getElementById("contact")as HTMLInputElement).value;

  const dateError = document.getElementById("dateError");
  const contactError = document.getElementById("contactError");
  const generalError = document.getElementById("generalError");
  const confirmationMessage = document.getElementById("confirmationMessage");

 

  if(!contact || !roompreference || !checkout || !checkin || !name){

    if(generalError){
      generalError.textContent="Please fill all the required fields";
      form.reset();
      return;
    }
    //return;
  }
  
  if(!contactError || !dateError|| !generalError || !confirmationMessage || !roompreference || !checkout || !checkin || !name){
    return;
  }

  contactError.textContent="";
  generalError.textContent="";
  if(!/^\d{10}$/.test(contact)){
    contactError.textContent = "Invalid Contact Number";
    return;
  }
  const bookingId = this.generateBookingId();

  confirmationMessage.innerText = `Booking is successful and your Booking Id is ${bookingId}`;
  confirmationMessage.style.display = "block";

 form.reset();
}
}
