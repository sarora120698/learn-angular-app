import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-passport',
  standalone: true,
  imports: [NgIf],
  templateUrl: './passport.component.html',
  styleUrl: './passport.component.css',
})
export class PassportComponent {
  showNormalBooking: boolean = false;
  showTatkalBooking: boolean = false;

  setNormal() {
    this.showNormalBooking = true;
    this.showTatkalBooking = false;
  }
  setTatkal() {
    this.showTatkalBooking = true;
    this.showNormalBooking = false;
  }
}
