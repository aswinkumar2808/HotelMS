import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-history-page',
  standalone: true,
  imports: [FormsModule,RouterOutlet, RouterModule],
  templateUrl: './admin-history-page.component.html',
  styleUrl: './admin-history-page.component.css'
})
export class AdminHistoryPageComponent {
  userId:number=0;
  constructor(private route: Router){};
  goToHistory()
  {
    if(this.userId){
    this.route.navigate(['/history-by-id',this.userId]);
    }
  }
}
