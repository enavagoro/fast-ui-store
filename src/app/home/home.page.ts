import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ip = '192.168.1.1';
  store = 'Mon Amour';
  array = [1,2,3,4]
  value = true;

  constructor() {}

  changeValue(){
    this.value = !this.value;
  }
}
