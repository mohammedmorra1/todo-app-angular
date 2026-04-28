import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrousel',
  imports: [FormsModule],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css',
})
export class Carrousel {
  imgSrc: string = '1.jpg';
  active: number = 1;
  dots: number[] = [1, 2, 3, 4];
  id: number = 0;
  auto: boolean = false;
  next() {
    this.active++;
    this.active = this.active > 4 ? 1 : this.active;
    this.imgSrc = `${this.active}.jpg`;
  }
  prev() {
    this.active--;
    this.active = this.active < 1 ? 4 : this.active;
    this.imgSrc = `${this.active}.jpg`;
  }
  tp(n: number) {
    this.active = n;
    this.imgSrc = `${this.active}.jpg`;
  }
  startAuto() {
    this.auto = true;
    this.id = setInterval(() => {
      this.next();
    }, 1000);
  }
  stopAuto() {
    this.auto = false;
    clearInterval(this.id);
  }
}
