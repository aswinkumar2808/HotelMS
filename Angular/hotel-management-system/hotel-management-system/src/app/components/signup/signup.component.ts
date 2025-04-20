import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserSignupService } from '../../services/user-signup.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private signUpService : UserSignupService, private router:Router) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+91'],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', Validators.required],
      loginId: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,30}$/)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onRegister() {
    if (this.signupForm.valid) {
      const userDetails:User = {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        mobileNumber: this.signupForm.value.mobileNumber,
        address: this.signupForm.value.address,
        loginId: this.signupForm.value.loginId,
        password: this.signupForm.value.password,
      }
    
      this.signUpService.signup(userDetails).subscribe({
        next: (response) => {
          if(response){
            console.log(response)
            this.router.navigate(['/login']);
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  onReset() {
    this.signupForm.reset();
  }
}
