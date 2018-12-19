import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  currencyOutput: number;
  constructor(public navCtrl: NavController) {
    this.currencyOutput = 3;
  }

  
}
