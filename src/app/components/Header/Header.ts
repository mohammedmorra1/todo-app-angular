import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'Header',
  templateUrl: './Header.html',
  styleUrls: ['./Header.css'],
  imports: [RouterLink],
})
export class Header {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }
}
