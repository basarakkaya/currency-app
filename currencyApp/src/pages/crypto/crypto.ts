import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-crypto',
  templateUrl: 'crypto.html'
})
export class CryptoPage {
  currencyOutput: number;
  constructor(public navCtrl: NavController) {
    this.currencyOutput = 3;
  }

  
}
