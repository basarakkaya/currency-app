import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CurrencyProvider } from '../../providers/currency/currency';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CurrencyProvider]
})
export class HomePage {
  currencies: Array<{ name: string, rate: number }>;
  baseCurr: string;
  keys: string[];

  constructor(public navCtrl: NavController, public http: HttpClient, public currencyProvider: CurrencyProvider) {

    this.baseCurr = "TRY";
    this.currencies = [];

    currencyProvider.getCurrencyKeys().then((response:string[]) => {
      console.log("currency keys: " + response);
      this.keys = response;
    }).then(() => {
      currencyProvider.getCurrencyRates(this.baseCurr).then((response:{name: string; rate:number;}[]) => {
        this.keys.forEach(currencyKey => {
          this.currencies.push({
            "name": currencyKey, 
            "rate": (1 / response[currencyKey])
          });
        });
      });
    });
    
    
  }
  
}
