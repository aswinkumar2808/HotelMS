import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  adminname: string = '';
  username: string = '';
  isAdminRoute: boolean = false;
  hideNavBar:boolean = false;
  constructor(private router: Router) {}  
  ngOnInit(): void{
    this.router.events.subscribe( () => {
      this.isAdminRoute= this.router.url.startsWith('/admin');
      this.hideNavBar = this.router.url.includes('login')  || this.router.url.includes('signup') || this.router.url.includes('mainpage');
    });
    const user = JSON.parse(localStorage.getItem('user')||'{}');
    const admin = JSON.parse(localStorage.getItem('admin') || '{}');
    this.username = user.loginId || '';
    this.adminname = admin.adminName;
  }

  logoutuser() {
    localStorage.removeItem('user');
    this.router.navigate(['/mainpage']);
  }
  logoutadmin() {
    localStorage.removeItem('admin');
    this.router.navigate(['/admin/login']);
  }
}
