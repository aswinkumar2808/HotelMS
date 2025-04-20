import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,FormsModule ],
  templateUrl: './user-login.component.html',
})
export class LoginComponent {
  loginError = '';
  loginForm: any;

  constructor(private fb: FormBuilder, private router: Router, private loginService : LoginService) {
    this.loginForm = this.fb.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get loginId() { return this.loginForm.get('loginId'); } 
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        loginId : this.loginForm.value.loginId,
        password:this.loginForm.value.password
      }
      console.log('Credentials', credentials);
      this.loginService.login(credentials).subscribe({
        next: (response) => {
          if(response){
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/homepage']);
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
