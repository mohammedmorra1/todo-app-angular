import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrousel',
  imports: [FormsModule],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css',
})
export class Carrousel {
  imgSrcs: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  imgSrc: string = this.imgSrcs[0];
  active: number = 0;
  // dots: number[] = [1, 2, 3, 4];
  id: number = 0;
  auto: boolean = false;
  next() {
    this.active++;
    this.active = this.active > this.imgSrcs.length - 1 ? 0 : this.active;
    this.imgSrc = this.imgSrcs[this.active];
  }
  prev() {
    this.active--;
    this.active = this.active < 0 ? this.imgSrcs.length - 1 : this.active;
    this.imgSrc = this.imgSrcs[this.active];
  }
  tp(n: number) {
    this.active = n;
    this.imgSrc = this.imgSrcs[this.active];
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
