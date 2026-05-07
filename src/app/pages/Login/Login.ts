import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './Login.html',
  styleUrl: './Login.css',
})
export class Login implements OnInit, OnChanges, DoCheck {
  username: string = '';
  password: string = '';
  submitted: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('id')) {
      this.router.navigate(['/']);
    }
  }

  ngOnChanges(): void {}

  ngDoCheck(): void {}

  handleSubmit(): void {
    this.submitted = true;
    if (this.username && this.password && this.password.length >= 4) {
      localStorage.setItem('id', this.username);
      this.router.navigate(['/']);
    }
  }
}
