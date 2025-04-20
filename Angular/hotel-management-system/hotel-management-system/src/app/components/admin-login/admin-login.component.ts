import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { AdminLoginService } from '../../services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule,FormsModule ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  loginError = '';
  loginForm: any;

  constructor(private fb: FormBuilder, private router: Router, private adminLoginService : AdminLoginService) {
    this.loginForm = this.fb.group({
      adminName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get adminName() { return this.loginForm.get('adminName'); } 
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        adminName : this.loginForm.value.adminName,
        password:this.loginForm.value.password
      }
      console.log('Credentials', credentials);
      this.adminLoginService.login(credentials).subscribe({
        next: (response) => {
          if(response){
            console.log(response);
            localStorage.setItem('admin', JSON.stringify(response));
          this.router.navigate(['/admin/homepage']);
          }
        },
        error: (error) => {
          if(error.status==401)  this.loginError = "Incorrect UserName or Password.."
          else this.loginError = "An unknown error occured please try again later.. "
        }
      });
      
    } 
  }
}
