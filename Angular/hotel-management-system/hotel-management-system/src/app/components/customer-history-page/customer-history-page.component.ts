import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../reservation';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReservationService } from '../../reservation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-history-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-history-page.component.html',
  styleUrl: './customer-history-page.component.css'
})
export class CustomerHistoryPageComponent implements OnInit {
  userId: number = 0;
  reservations: Reservation[]  = [];
  user:any  = JSON.parse(localStorage.getItem('user')||'{}');
  id: number= this.user.userId;
  
  
  constructor(private route: ActivatedRoute, private resService: ReservationService){};

  ngOnInit(): void
  {
    console.log(this.id);
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log(idParam);
    //this.id=idParam?+idParam:0;
    console.log(idParam);
    this.resService.getReservationByUserId(this.id).subscribe(data => {

      this.reservations = data;
      
    });
  }

}
