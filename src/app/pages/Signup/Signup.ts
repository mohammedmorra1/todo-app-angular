import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

function matchPassword(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { mismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './Signup.html',
  styleUrl: './Signup.css',
})
export class Signup implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: matchPassword },
    );
  }

  ngOnInit(): void {
    if (localStorage.getItem('id')) {
      this.router.navigate(['/']);
    }
  }

  handleSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.router.navigate(['/login']);
    }
  }
}
