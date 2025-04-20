import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Reservation } from '../../reservation';
import { ReservationService } from '../../reservation.service';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  userId: number = 0;
  reservations: Reservation[]  = [];
  id: number=0;
  
  constructor(private route: ActivatedRoute, private resService: ReservationService){};

  ngOnInit(): void
  {
    const idParam = this.route.snapshot.paramMap.get('id');
   // console.log(idParam);
    this.id=idParam?+idParam:0;

    this.resService.getReservationByUserId(this.id).subscribe(data => {

      this.reservations = data;
      
    });
  }

}
